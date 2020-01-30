import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-class',
    templateUrl: './class.component.html',
    styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
    classDetails: FormGroup;
    constructor(private fb: FormBuilder) {
        this.classDetails = fb.group({
            classCode: [''],
            classDetails: [''],
            insuranceAccLimit: [],
            policyAccLimit: [],
            withEffectFrom: [],
            withEffectTo: []
        });
    }

    ngOnInit() {}
}
