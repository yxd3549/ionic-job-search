import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.page.html',
    styleUrls: ['./skills.page.scss'],
})
export class SkillsPage implements OnInit {

    private skill_search_form: FormGroup;
    private skills = ['python', 'java', 'oracle', 'testing'];

    constructor(private http: HTTP, private formBuilder: FormBuilder) {
        this.skill_search_form = this.formBuilder.group({
            skill: ['', Validators.required],
        });
    }

    logForm(){
        console.log(this.skill_search_form.value);
    }

    ngOnInit() {
    }

}
