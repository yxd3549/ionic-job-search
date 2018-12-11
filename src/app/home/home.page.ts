import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {MockApiService} from '../mock-api.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
    private keyword_search_form: FormGroup;
    response;
    constructor(private formBuilder: FormBuilder, private mockAPI: MockApiService) {
        this.keyword_search_form = this.formBuilder.group({
            search: ['', Validators.required],
        });
    }

    logForm() {
        console.log(this.keyword_search_form.value);
    }

    ngOnInit() {
        this.response = this.mockAPI.getData();
    }
}
