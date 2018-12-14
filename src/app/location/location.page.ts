import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HTTP} from '@ionic-native/http/ngx';
import {Geolocation} from '@ionic-native/geolocation/ngx';

@Component({
    selector: 'app-location',
    templateUrl: './location.page.html',
    styleUrls: ['./location.page.scss'],
})
export class LocationPage {

    private location_search_form: FormGroup;
    private response;

    constructor(private formBuilder: FormBuilder, private http: HTTP, private geolocation: Geolocation) {
        this.location_search_form = this.formBuilder.group({
            city: [''],
            location: [false]
        });
    }

    /**
     * Calls the appropiate function based on the user's selection.
     * If the user agreed to use their location, it will search using their lat and long
     * Otherwise, it will use the provided city or state.
     */
    handleForm() {

        if (this.location_search_form.value.location === true) {
            this.getJobsWithLocation();
        }
        else if (this.location_search_form.value.city !== '') {
            this.getJobsWithCity(this.location_search_form.value.city);
        }
    }

    /**
     * Gets the current lat and long and makes an API calls with those coordinates.
     */
    getJobsWithLocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            const url = 'https://jobs.github.com/positions.json?lat=' + resp.coords.latitude + '&' + 'long=' + resp.coords.longitude;
            console.log(url);
            this.http.get(url, {}, {'Authorization': 'Bearer asdfasdfa'})
                .then(response => {
                    const data = JSON.parse(response.data);
                    this.response = data;
                    console.log('data: ', data);
                })
                .catch(error => {
                    console.log('error', error);
                });
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }

    /**
     * Uses a location name to make a call the to github jobs api
     * @param location
     */
    getJobsWithCity(location: string) {
        const url = 'https://jobs.github.com/positions.json?location=' + location;
        this.http.get(url, {}, {'Authorization': 'Bearer asdfasdfa'})
            .then(response => {
                const data = JSON.parse(response.data);
                this.response = data;
                console.log('data: ', data);
            })
            .catch(error => {
                console.log('error', error);
            });
    }
}
