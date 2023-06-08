import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle';
import { VEHICLES } from './mock-vehicles';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private messageService: MessageService) { }

  getVehicles(): Observable<Vehicle[]> {
    const vehicles = of(VEHICLES);
    this.messageService.add('VehicleService: getVehicles()');
    return vehicles;
  }

  getVehicle(id: string | null): Observable<Vehicle | undefined> {
    if (!id) {
      return of(undefined);
    }
    
    const vehicle = VEHICLES.find(veh => veh.id === id);
    this.messageService.add(`VehicleService: getVehicle(${id})`);
    return of(vehicle);
  }
}
