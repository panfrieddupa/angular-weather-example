import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Data } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getData(city: string) : Observable<Data> {
    return this.http.get<Data>(environment.dataURL, {
        headers: new HttpHeaders()
            .set(environment.xRapidAPIHostName, environment.xRapidAPIHostValue)
            .set(environment.xRapidAPIKeyName, environment.xRapidAPIKeyValue),

        params: new HttpParams()
            .set('q', city)
            .set('days', 3)
    })
  }
}
