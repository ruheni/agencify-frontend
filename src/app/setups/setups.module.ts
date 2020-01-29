import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ClassComponent } from './class/class.component';
import { CoverTypesComponent } from './cover-types/cover-types.component';
import { ProductGrpComponent } from './product-grp/product-grp.component';
import { SetupsRoutingModule } from './setups-routing.module';
import { SubclassComponent } from './subclass/subclass.component';
import { TransactionTypesComponent } from './transaction-types/transaction-types.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        SubclassComponent,
        ClassComponent,
        ProductGrpComponent,
        TransactionTypesComponent,
        CoverTypesComponent
    ],
    imports: [
        CommonModule,
        SetupsRoutingModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatButtonModule
    ]
})
export class SetupsModule {}
