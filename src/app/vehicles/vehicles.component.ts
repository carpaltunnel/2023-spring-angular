import { Component } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicles:Vehicle[] = [];
  selectedVehicle!: Vehicle;

  constructor(private vehicleService:VehicleService){}

  onSelect(vehicle: Vehicle): void {
    this.selectedVehicle = vehicle;
  }

  getVehicles(): void {
    this.vehicleService.getVehicles()
      .subscribe((vehicles) => {
        this.vehicles = vehicles;
      });
  }

  ngOnInit(): void {
    this.getVehicles();
  }
}
