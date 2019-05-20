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

  addPackage(name, type, image_url, destination, hotel, price) {
    const pkg = {
      package: {
        name: name,
        type: type,
        image_url: image_url
      },
      destination: destination,
      hotel: hotel,
      price: price
    };

    return this.http.post(`${this.uri}/package/add`, pkg);
  }

  updatePackageByName(name, type, image_url, destination, hotel, price) {
    const pkg = {
      package: {
        name: name,
        type: type,
        image_url: image_url
      },
      destination: destination,
      hotel: hotel,
      price: price
    };

    return this.http.put(`${this.uri}/package/update/${name}`, pkg);
  }

  updatePackageById(id, name, type, image_url, destination, hotel, price) {
    const pkg = {
      package: {
        name: name,
        type: type,
        image_url: image_url
      },
      destination: destination,
      hotel: hotel,
      price: price
    };

    return this.http.put(`${this.uri}/package/update/${name}`, pkg);
  }

  deletePackageById(id) {
    return this.http.delete(`{this.uri}/package/delete/${id}`);
  }

  deletePackageByName(name) {
    return this.http.delete(`{this.uri}/package/delete/${name}`);
  }
}

