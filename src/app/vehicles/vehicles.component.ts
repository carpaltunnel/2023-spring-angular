import { Component } from '@angular/core';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicle: Vehicle = {
    id: 'a2a69a22-68c8-4ce5-bd45-3fda93b97896',
    make: 'Honda',
    model: 'Accord',
    year: 2020,
  };
}
