import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackageService } from '../../services/package.service';
import { PackageModel } from '../../models/package.model';
@Component({
  selector: 'app-tables',
  templateUrl: './packageDetail.component.html',
  styleUrls: ['./packageDetail.component.scss']
})
export class PackageDetailComponent implements OnInit {

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

}
