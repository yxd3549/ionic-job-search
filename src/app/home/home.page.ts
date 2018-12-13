import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {MockApiService} from '../mock-api.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
    private keyword_search_form: FormGroup;
    response;

    constructor(private formBuilder: FormBuilder, private mockAPI: MockApiService, private http: HTTP) {
        this.keyword_search_form = this.formBuilder.group({
            search: ['', Validators.required],
        });
    }

    handleForm() {
        this.getJobs(this.keyword_search_form.value.search);
    }

    getJobs(keyword: string) {
        //const url = 'http://api.dataatwork.org/v1/skills/autocomplete?contains=%22java%22';
        const url = 'https://jobs.github.com/positions.json?description=' + keyword + '&full_time=true&location=sf';
        this.http.get(url, {}, {'Authorization': 'Bearer asdfasdfa'})
            .then(response => {
                console.log('response: ', response);
                const data = JSON.parse(response.data);
                this.response = data;
                console.log('data: ', data);
            })
            .catch(error => {
                console.log('error', error);
            });
    }

    async ngOnInit() {
    }
}
