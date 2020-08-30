import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

baseurl = "http://127.0.0.1:8000";
httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }
  
  getAllFlights(): Observable<any> {
  return this.http.get(this.baseurl + '/flights/', {headers: this.httpHeaders});
  }
  
  getOneFlight(id): Observable<any> {
  return this.http.get(this.baseurl + '/flights/' + id + '/', {headers: this.httpHeaders});
  }
  
    updateFlight(flight): Observable<any> {
    const body = {airliner: flight.airliner, flight_no: flight.flight_no, trip_type:flight.trip_type, airport: flight.airport, location: flight.location, description: flight.description,
destination : flight.destination, depart_date: flight.depart_date, seat_capacity: flight.seat_capacity,
};
  return this.http.put(this.baseurl + '/flights/' + flight.id + '/', body, {headers: this.httpHeaders});
  }
  
  createFlight(flight): Observable<any> {
    const body = {airliner: flight.airliner, flight_no: flight.flight_no, trip_type:flight.trip_type, airport: flight.airport, location: flight.location, description: flight.description,
destination : flight.destination, depart_date: flight.depart_date, seat_capacity: flight.seat_capacity,
};
  return this.http.post(this.baseurl + '/flights/' , body, {headers: this.httpHeaders});
  }
  
    deleteFlight(id): Observable<any> {
  return this.http.delete(this.baseurl + '/flights/' + id + '/' , {headers: this.httpHeaders});
  }
  
}
