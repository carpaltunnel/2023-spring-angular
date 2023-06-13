import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicles: Vehicle[] = [];
  selectedVehicle!: Vehicle;

  constructor(private vehicleService: VehicleService) { }

  getVehicles(): void {
    this.vehicleService.getVehicles()
      .subscribe((vehicles) => {
        this.vehicles = vehicles;
      });
  }

  add(make: string, model: string, year: string) {
    if (make && model && year) {
      this.vehicleService.createVehicle({
        make,
        model,
        year: Number(year),
        id: '',
      } as Vehicle).subscribe(v => {
        this.vehicles.push(v);
      });
    }
  }

  ngOnInit(): void {
    this.getVehicles();
  }
}
