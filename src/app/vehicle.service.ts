import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vehicle } from './vehicle';
import { VEHICLES } from './mock-vehicles';
import { Observable, of, catchError, map, tap } from 'rxjs';
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
    return this.http.get<Vehicle[]>(this.vehiclesUrl)
      .pipe(catchError(this.handleError<Vehicle[]>('getVehicles', [])));
  }

  getVehicle(id: string | null): Observable<Vehicle | undefined> {
    if (!id) {
      return of(undefined);
    }
    
    const vehicle = VEHICLES.find(veh => veh.id === id);
    this.messageService.add(`VehicleService: getVehicle(${id})`);
    return of(vehicle);
  }

  private handleError<T>(op = '', result?: T) {
    return (error: any): Observable<T> => {
      // Log to your log aggregator
      console.error(error);

      this.messageService.add(`Got error : ${error} @ ${new Date().toISOString()}`);

      return of(result as T);
    }
  }
}
