import {Component, OnInit} from '@angular/core';
import {HTTP} from '@ionic-native/http/ngx';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {MockApiService} from '../mock-api.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
    private keyword_search_form: FormGroup;
    private url = 'https://jobs.github.com/positions.json?description=python&full_time=true&location=sf';
    response;
    constructor(private http: HTTP, private formBuilder: FormBuilder, private mockAPI: MockApiService) {
        this.keyword_search_form = this.formBuilder.group({
            search: ['', Validators.required],
        });
    }

    logForm() {
        console.log(this.keyword_search_form.value);
    }

    ngOnInit() {
        /*
        // this.http.setHeader( "*", "Authorization", "Bearer asdfasdfa" );
        this.http.get(this.url, {}, {})
            .then(response => {
                console.log('response: ', response);
                const data = JSON.parse(response.data);
                this.response = data;
                console.log('data: ', data);
            })
            .catch(error => {
                console.log('error', error);
            });
            */
        this.response = this.mockAPI.getData();
    }
}
