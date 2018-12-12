import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {HTTP} from '@ionic-native/http/ngx';
import {JobsService} from '../jobs.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

    private location_search_form: FormGroup;
    private response;

    constructor(private http: HTTP, private formBuilder: FormBuilder, private jobsService: JobsService) {
        this.location_search_form = this.formBuilder.group({
            city: [''],
            location: [false]
        });
    }

    logForm() {
        console.log(this.location_search_form.value);
        this.response = this.jobsService.getJobs();
    }

    ngOnInit() {
    }

}
