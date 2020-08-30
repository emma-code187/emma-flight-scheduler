import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService],
})
export class AppComponent {
  title = 'flightscheduler';
  flights = [{airliner: 'Air Peace'}, {airliner: 'Arik Air'}, {airliner: 'British Airway'}];
  selectedFlight;
  
  constructor(private api: ApiService) {
this.getFlights();
this.selectedFlight = {id: -1, airliner:" ", flight_no:" ", trip_type:" ", airport:" ", location:" ", description:" ",
destination :" ", depart_date:" ", seat_capacity:" ",}
}
getFlights = () => {
this.api.getAllFlights().subscribe(
data => {
this.flights = data;
},
error => {
console.log(error);
}
);
}
flightClicked = (flight) => {
this.api.getOneFlight(flight.id).subscribe(
data => {
  this.selectedFlight =data;
},
error => {
console.log(error);
}
);
}
updateFlight = () => {
this.api.updateFlight(this.selectedFlight).subscribe(
data => {
  this.getFlights();
},
error => {
console.log(error);
}
);
}
createFlight = () => {
this.api.createFlight(this.selectedFlight).subscribe(
data => {
  this.flights.push(data);
},
error => {
console.log(error);
}
);
}
deleteFlight = () => {
this.api.deleteFlight(this.selectedFlight.id).subscribe(
data => {
 this.getFlights();
},
error => {
console.log(error);
}
);
}
}
