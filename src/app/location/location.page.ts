import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {HTTP} from '@ionic-native/http/ngx';
import {Geolocation} from '@ionic-native/geolocation/ngx';

@Component({
    selector: 'app-location',
    templateUrl: './location.page.html',
    styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

    private location_search_form: FormGroup;
    private response;

    constructor(private formBuilder: FormBuilder, private http: HTTP, private geolocation: Geolocation) {
        this.location_search_form = this.formBuilder.group({
            city: [''],
            location: [false]
        });
    }

    handleForm() {

        if (this.location_search_form.value.location === true) {
            this.getJobsWithLocation();
        }
        else if (this.location_search_form.value.city !== '') {
            this.getJobsWithCity(this.location_search_form.value.city);
        }
    }

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

    ngOnInit() {

    }

}
