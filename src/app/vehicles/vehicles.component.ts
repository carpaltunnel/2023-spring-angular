import { Component } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VEHICLES } from '../mock-vehicles';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicles = VEHICLES;
  selectedVehicle?: Vehicle;

  onSelect(vehicle: Vehicle): void {
    this.selectedVehicle = vehicle;
  }
}
