import {Injectable} from '@angular/core';
import {HTTP} from '@ionic-native/http/ngx';

@Injectable({
    providedIn: 'root'
})
export class JobsService {

    private url = 'https://jobs.github.com/positions.json?description=python&full_time=true&location=sf';
    response;

    constructor(private http: HTTP, ) {
    }

    getJobs() {

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
    }
}
