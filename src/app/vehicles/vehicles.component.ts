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

  onSelect(vehicle: Vehicle): void {
    this.selectedVehicle = vehicle;
  }
}
