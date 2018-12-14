import {Component} from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {MockApiService} from '../mock-api.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {
    private keyword_search_form: FormGroup;
    response;

    constructor(private formBuilder: FormBuilder, private mockAPI: MockApiService, private http: HTTP) {
        this.keyword_search_form = this.formBuilder.group({
            search: ['', Validators.required],
        });
    }

    /**
     * Sends keyword to the getJobs function to retrieve data.
     */
    handleForm() {
        this.getJobs(this.keyword_search_form.value.search);
    }

    /**
     * Calls the github jobs api to retrieve data based on the provided keyword.
     * @param keyword
     */
    getJobs(keyword: string) {
        const url = 'https://jobs.github.com/positions.json?description=' + keyword;
        this.http.get(url, {}, {})
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
