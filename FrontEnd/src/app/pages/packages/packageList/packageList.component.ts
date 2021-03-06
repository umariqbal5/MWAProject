import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackageService } from '../../../services/package.service';
import { PackageModel } from '../../../models/package.model';
import { ConfirmationDialogService } from '../../../components/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-tables',
  templateUrl: './packageList.component.html',
  styleUrls: ['./packageList.component.scss']
})
export class PackageListComponent implements OnInit {

  packages: PackageModel[];

  constructor(private packageService:PackageService,
              private confirmService: ConfirmationDialogService,
              private router:Router) { }

  ngOnInit() {
    this.fetchPackages();
  }
  fetchPackages() {
    this.packageService
      .getPackages()
      .subscribe((data: PackageModel[]) => {
        this.packages = data;
    });
  }

  editPackageById(id) {
    this.router.navigate([`/editPackage/`+id]);
  }

  deletePackageById(id) {
    console.log('inside delete component id');
    this.packageService
      .deletePackageById(id)
      .subscribe(() => {
        this.fetchPackages();
    });
  }

  deletePackageByName(name) {
    console.log('inside delete component name ');
    this.packageService
        .deletePackageByName(name)
        .subscribe(() => {
            this.fetchPackages();
          });
  }

  confirmDelete(name) {
    this.confirmService
      .confirm('Please confirm ... ',
        `Do you really want to delete ${name} package?`)
      .then((confirmed) => {
        if(confirmed) {
         this.deletePackageByName(name);
        }
      })
      .catch();
  }
}
