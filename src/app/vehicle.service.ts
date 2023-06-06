import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle';
import { VEHICLES } from './mock-vehicles';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }

  getVehicles(): Observable<Vehicle[]> {
    const vehicles = of(VEHICLES);
    return vehicles;
  }
}
