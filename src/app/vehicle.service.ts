import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle';
import { VEHICLES } from './mock-vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }

  getVehicles(): Vehicle[] {
    return VEHICLES;
  }
}
