import {Component, OnInit} from '@angular/core';
import {HTTP} from '@ionic-native/http/ngx';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
    private keyword_search_form: FormGroup;
    private url = 'http://ganskop.com/proxy/http://api.dataatwork.org/v1/jobs/autocomplete?begins_with="software"';
    response = [];
    constructor(private http: HTTP, private formBuilder: FormBuilder) {
        this.keyword_search_form = this.formBuilder.group({
            search: ['', Validators.required],
            full_time: [false],
        });
    }

    logForm(){
        console.log(this.keyword_search_form.value);
    }

    ngOnInit() {
        // this.http.setHeader( "*", "Authorization", "Bearer asdfasdfa" );
        this.http.get(this.url, {}, {'Authorization': 'Bearer asdfasdfa'})
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
}
