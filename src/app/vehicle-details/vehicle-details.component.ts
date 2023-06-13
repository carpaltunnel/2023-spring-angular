import { Component, Input } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {
  vehicle: Vehicle | undefined; 

  constructor(
    private vehicleService: VehicleService,
    private route: ActivatedRoute,
    private location: Location
  ){};

  ngOnInit(): void {
    this.getVehicle();
  }

  getVehicle(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.vehicleService.getVehicle(id)
      .subscribe((vehicle) => {
        this.vehicle = vehicle;
      });
  }

  save(): void {
    if (this.vehicle) {
      this.vehicleService.updateVehicle(this.vehicle)
        .subscribe(() => this.goBack());
    }
  }

  delete(): void {
    if (this.vehicle) {
      this.vehicleService.deleteVehicle(this.vehicle)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
}
