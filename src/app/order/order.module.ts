import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module'
import { OrderComponent } from './order.component';
// app.module.ts
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from '../services/service.service';

import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon'; 
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { AddRuleComponent } from './addRule/add-rule.component';
import { ListRuleComponent } from './list-rule/list-rule.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RuleService } from '../services/rule.service';

@NgModule({
  declarations: [
    OrderComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatIconModule,
    DragDropModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    AddRuleComponent,
    ListRuleComponent,
  ],
  providers: [RuleService], // Ajoutez votre service aux fournisseurs
})
export class OrderModule { }
