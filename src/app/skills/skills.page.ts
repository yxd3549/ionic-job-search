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
    private skills = [];
    private response = [];

    constructor(private http: HTTP, private formBuilder: FormBuilder) {
        this.skill_search_form = this.formBuilder.group({
            skillSearch: ['', Validators.required],
            skill: [''],
        });
    }

    handleForm() {
        this.getSkills(this.skill_search_form.value.skillSearch);
        if (this.skill_search_form.value.skill !== '') {
            const keywords = this.skill_search_form.value.skill.split(' ');
            this.response = [];
            for (const keyword of keywords) {
                console.log(keyword);
                this.getJobs(keyword);
            }

        }
        console.log(this.skill_search_form.value);
    }

    getSkills(keyword: string) {
        const url = 'http://api.dataatwork.org/v1/skills/autocomplete?contains=%22' + keyword + '%22';
        this.http.get(url, {}, {'Authorization': 'Bearer asdfasdfa'})
            .then(response => {
                const data = JSON.parse(response.data);
                this.skills = data;
                console.log('data: ', data);
            })
            .catch(error => {
                console.log('error', error);
            });
    }

    getJobs(keyword: string) {
        const url = 'https://jobs.github.com/positions.json?description=' + keyword;
        this.http.get(url, {}, {'Authorization': 'Bearer asdfasdfa'})
            .then(response => {
                const data = JSON.parse(response.data);
                for (const job of data) {
                    this.response.push(job);
                }
                console.log('data: ', data);
            })
            .catch(error => {
                console.log('error', error);
            });
    }

    ngOnInit() {
    }

}
