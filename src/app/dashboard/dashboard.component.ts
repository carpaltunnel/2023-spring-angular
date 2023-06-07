import { Component } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  vehicles: Vehicle[] = [];

  constructor(private vehicleService:VehicleService){}

  getVehicles(): void {
    this.vehicleService.getVehicles()
      .subscribe((vehicles) => {
        this.vehicles = vehicles.slice(1, 5);
      });
  }

  ngOnInit(): void {
    this.getVehicles();
  }
}
