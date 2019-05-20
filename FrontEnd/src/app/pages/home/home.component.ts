import { Component, OnInit, OnDestroy } from '@angular/core';
import { PackageService } from '../../services/package.service';
import { PackageModel } from '../../models/package.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  packages: PackageModel[];
  constructor(private packageService:PackageService, private router:Router) {}

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
  ngOnDestroy() {
  }

}
