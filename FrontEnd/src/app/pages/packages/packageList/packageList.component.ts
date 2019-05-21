import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackageService } from '../../../services/package.service';
import { PackageModel } from '../../../models/package.model';
@Component({
  selector: 'app-tables',
  templateUrl: './packageList.component.html',
  styleUrls: ['./packageList.component.scss']
})
export class PackageListComponent implements OnInit {

  packages: PackageModel[];

  constructor(private packageService:PackageService, private router:Router) { }

  ngOnInit() {
    this.fetchPackages();
  }
  fetchPackages() {
    this.packageService
      .getPackages()
      .subscribe((data: PackageModel[]) => {
        this.packages = data;
        console.log('Data requested ...');
        console.log(this.packages);
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
}
