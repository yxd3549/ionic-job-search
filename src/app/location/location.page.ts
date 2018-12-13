import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-location',
    templateUrl: './location.page.html',
    styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

    private location_search_form: FormGroup;
    private response;

    constructor(private formBuilder: FormBuilder) {
        this.location_search_form = this.formBuilder.group({
            city: [''],
            location: [false]
        });
    }

    logForm() {
        console.log(this.location_search_form.value);

    }

    ngOnInit() {

    }

}
