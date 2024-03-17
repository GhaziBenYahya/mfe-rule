import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { MatListModule } from '@angular/material/list';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { OrderModule } from '../app/order/order.module';
import { FormsModule } from '@angular/forms';


export const routes: Routes = [
    {path:'',loadChildren:()=>import('../app/order/order.module').then(m=>m.OrderModule)}

];

@NgModule({
    imports: [RouterModule.forRoot(routes),
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule ,],
    exports: [RouterModule],
     
})
export class OrderRoutingModule {}