import { Component, OnInit } from '@angular/core';
import { Data } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'VaporCast';

    constructor(private weatherService: WeatherService) {

    }

    time : number = new Date().getHours();
    localTime?: Date;
    city: string = 'Calgary';
    data?: Data;

    ngOnInit(): void {
        this.getData(this.city);
    }

    onSubmit() {
        this.getData(this.city);
    }

    private getData(city: string) {
        this.weatherService.getData(city)
            .subscribe({
                next: (res) => {
                    this.data = res;
                    let localTime = new Date(res.location.localtime);
                    this.time = localTime.getHours();
                }
            })
    }
}
