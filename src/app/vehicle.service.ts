import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vehicle } from './vehicle';
import { VEHICLES } from './mock-vehicles';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  // TODO: Ensure this is correct with CORS+Proxy
  private vehiclesUrl = 'api/v1/vehicles';

  constructor(private messageService: MessageService,
    private http: HttpClient) { }

  getVehicles(): Observable<Vehicle[]> {
    // TODO: Start here on Monday : 2023-06-12
    // TODO:  ** CONFIGURE PROXY.CONF, HANDLE CORS **
    //const vehicles = of(VEHICLES);
    //this.messageService.add('VehicleService: getVehicles()');
    //return vehicles;
    return this.http.get<Vehicle[]>(this.vehiclesUrl);
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
