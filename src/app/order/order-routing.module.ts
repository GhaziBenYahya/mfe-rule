import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { OrderComponent } from './order.component';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { AddRuleComponent } from './addRule/add-rule.component';
import { ListRuleComponent } from './list-rule/list-rule.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = [


  { path: '', redirectTo: 'orderComponent/addRuleComponent', pathMatch: 'full' },
  
   // {path:'',component:OrderComponent},


    {
        path: 'orderComponent',
        component: OrderComponent,
        children:[
          {
            path: "addRuleComponent",
            component: AddRuleComponent
          },
          {
            path: 'listRuleComponent',
            component: ListRuleComponent
          },
          {
            path: 'headerComponent',
            component: HeaderComponent
          },
          {
            path: 'sidebarComponent',
            component: SidebarComponent
          }
          
        ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes), 
    MatListModule, 
    MatExpansionModule,
    MatIconModule,
    DragDropModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,],
    exports: [RouterModule]
})
export class OrderRoutingModule {}
