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
  private vehiclesUrl = 'api/v1/vehicles';
  private httpOptions = {
    headers: new HttpHeaders(
      { 'Content-Type': 'application/json' }
    ),
  };

  constructor(private messageService: MessageService,
    private http: HttpClient) { }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.vehiclesUrl)
      .pipe(
        tap(_ => this.messageService.add('Fetched Vehicles')),
        catchError(this.handleError<Vehicle[]>('getVehicles', []))
        );
  }

  getVehicle(id: string | null): Observable<Vehicle | undefined> {
    if (!id) {
      return of(undefined);
    }
    
    return this.http.get<Vehicle>(`${this.vehiclesUrl}/${id}`)
      .pipe(
        tap(_ => this.messageService.add(`Fetched Vehicle ID ${id}`)),
        catchError(this.handleError<Vehicle>('getVehicle'))
        );
  }

  updateVehicle(v: Vehicle): Observable<any> {
    return this.http.patch(`${this.vehiclesUrl}/${v.id}`, v, this.httpOptions)
    .pipe(
      tap(_ => this.messageService.add(`Patched Vehicle ID ${v.id}`)),
      catchError(this.handleError<any>('updateVehicle'))
      );
  }

  deleteVehicle(v: Vehicle): Observable<any> {
    return this.http.delete(`${this.vehiclesUrl}/${v.id}`)
    .pipe(
      tap(_ => this.messageService.add(`Deleted Vehicle ID ${v.id}`)),
      catchError(this.handleError<any>('deletedVehicle'))
      );
  }

  createVehicle(v: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(this.vehiclesUrl, v, this.httpOptions)
    .pipe(
      tap((vNew: Vehicle) => this.messageService.add(`Created Vehicle w/ ID ${vNew.id}`)),
      catchError(this.handleError<any>('updateVehicle'))
      );
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
