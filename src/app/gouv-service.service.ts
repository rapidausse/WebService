import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GouvServiceService {

  constructor(private http : HttpClient) { }

  async getAdressByName(adress: string) {
    return await this.http.get(environment.url + "/search/?q="+adress).toPromise();
  }

  async getAdressByLatLong(lat: any, long: any) {
    return await this.http.get(environment.url + "/reverse/?lon="+ long + "&lat=" + lat).toPromise();
  }
}
