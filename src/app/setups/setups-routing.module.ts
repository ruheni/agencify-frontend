import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './class/class.component';
import { CoverTypesComponent } from './cover-types/cover-types.component';
import { ProductGrpComponent } from './product-grp/product-grp.component';
import { TransactionTypesComponent } from './transaction-types/transaction-types.component';

const routes: Routes = [
    { path: 'classes', component: ClassComponent },
    { path: 'product-grp', component: ProductGrpComponent },
    { path: 'cover-types', component: CoverTypesComponent },
    { path: 'transaction-types', component: TransactionTypesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SetupsRoutingModule {}
