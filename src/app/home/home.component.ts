import { Component, OnInit } from '@angular/core';
import {GouvServiceService } from '../gouv-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  value: any = "";

  public addressGouvByName: any;
  public addressGouvByLatLong: any;
  valueLong: any;
  valueLat: any;

  constructor(private gouvService : GouvServiceService) { }

  ngOnInit(): void {
  }

  async getAddress(address : string) {
    if(address.length > 0 && address != undefined) {
      let response: any = await this.gouvService.getAdressByName(address);
      console.log(response);
      this.addressGouvByName = response.features;
    }else
    {
      this.addressGouvByName = [];
    }
  }

  async getAddressByLatLong(lat: any, long: any)
  {
    if(lat != undefined && long != undefined && lat.length > 0 && long.length > 0) {
      let response: any = await this.gouvService.getAdressByLatLong(lat, long)
      console.log(response);
      this.addressGouvByLatLong = response.features;
    }
    else{
      this.addressGouvByLatLong = [];
    }
  }

  onEnterName(value: string) {
    this.value = value.replace(/ /g, '+');
    console.log(this.value);

    this.getAddress(this.value);
  }

  onEnterLat(valueLat: any) {
    this.valueLat = valueLat;
    this.getAddressByLatLong(this.valueLat,this.valueLong);
  }

  onEnterLong(valueLong: any) {
    this.valueLong = valueLong;
    this.getAddressByLatLong(this.valueLat,this.valueLong);
  }

}
