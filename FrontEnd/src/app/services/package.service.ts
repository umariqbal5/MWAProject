import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  uri = 'http://localhost:4000/api';

  constructor(private http: HttpClient) {
  }

  getPackages() {
    return this.http.get(`${this.uri}/package`);
  }

  getPackageById(id) {
    return this.http.get(`${this.uri}/package/id/${id}`);
  }

  getPackageByName(name) {
    return this.http.get(`${this.uri}/package/name/${name}`);
  }

  getPackageByType(type) {
    return this.http.get(`${this.uri}/package/type/${type}`);
  }

  getPackageByDestination(destination) {
    return this.http.get(`${this.uri}/package/destination/${destination}`);
  }

  addPackage(name, type, image_url, description, destination, hotel, price) {
    const pkg = {
      package: {
        name: name,
        package_type: type,
        description: description,
        image_url: image_url
      },
      destination: destination,
      hotel: hotel,
      price: price
    };

    return this.http.post(`${this.uri}/package/add`, pkg);
  }

  updatePackageByName(name, type, image_url, description, destination, hotel, price) {
    const pkg = {
      package: {
        name: name,
        package_type: type,
        description: description,
        image_url: image_url
      },
      destination: destination,
      hotel: hotel,
      price: price
    };

    return this.http.put(`${this.uri}/package/update/name/${name}`, pkg);
  }

  updatePackageById(id, name, type, description, image_url, destination, hotel, price) {
    const pkg = {
      package: {
        name: name,
        package_type: type,
        description: description,
        image_url: image_url
      },
      destination: destination,
      hotel: hotel,
      price: price
    };
// console.log(pkg);
    // return this.http.put('', pkg);
    return this.http.put(`${this.uri}/package/update/id/${id}`, pkg);
  }

  deletePackageById(id) {
    return this.http.delete(`${this.uri}/package/delete/id/${id}`);
  }

  deletePackageByName(name) {
    return this.http.delete(`${this.uri}/package/delete/name/${name}`);
  }
}

