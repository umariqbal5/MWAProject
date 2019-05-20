import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackageService } from '../../services/package.service';
import { PackageModel } from '../../models/package.model';
@Component({
  selector: 'app-tables',
  templateUrl: './packageList.component.html',
  styleUrls: ['./packageList.component.scss']
})
export class PackageListComponent implements OnInit {

  packages: PackageModel[];
  displayedcolumns = ['id', 'name', 'type', 'destination(s)', 'hotel', 'price'];

  constructor(private packageService:PackageService, private router:Router) { }

  ngOnInit() {
    //this.packageService.getPackages().subscribe((users)=>console.log(users));
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
    this.router.navigate([`/update/${id}`]);
  }

  deleteUserById(id) {
    this.packageService
      .deletePackageById(id)
      .subscribe(() => {
        this.fetchPackages();
    });
  }

  deleteUserByName(name) {
    this.packageService
      .deletePackageById(name)
      .subscribe(() => {
        this.fetchPackages();
      });
  }
}
