import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-subclass',
    templateUrl: './subclass.component.html',
    styleUrls: ['./subclass.component.scss']
})
export class SubclassComponent implements OnInit {
    subClassDetails: FormGroup;
    constructor(private fb: FormBuilder) {
        this.subClassDetails = fb.group({
            subClassName: [''],
            withEffectFrom: [],
            withEffectTo: [],
            claimsNoPrefix: [],
            propertyId: [],
            platformAdminCode: []
        });
    }

    ngOnInit() {}
}
