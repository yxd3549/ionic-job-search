import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
    selector: 'app-location',
    templateUrl: './location.page.html',
    styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

    private location_search_form: FormGroup;
    private response;

    constructor(private formBuilder: FormBuilder, private http: HTTP) {
        this.location_search_form = this.formBuilder.group({
            city: [''],
            location: [false]
        });
    }

    handleForm() {
        this.getJobsWithCity(this.location_search_form.value.city);
        console.log(this.location_search_form.value);

    }

    getJobsWithCity(location: string) {
        //const url = 'http://api.dataatwork.org/v1/skills/autocomplete?contains=%22java%22';
        //const url = 'https://jobs.github.com/positions.json?description=' + keyword + '&full_time=true&location=sf';
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
