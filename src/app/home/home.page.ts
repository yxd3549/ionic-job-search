import {Component, OnInit} from '@angular/core';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
    private url = 'http://ganskop.com/proxy/http://api.dataatwork.org/v1/jobs/autocomplete?begins_with="software"';
    response = [];
    constructor(private http: HTTP) {
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
