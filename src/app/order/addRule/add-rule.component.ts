import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';
import { RuleDto } from '../models/rule-dto';
import { ObjectDto } from '../models/object-dto';
import { FormsModule } from '@angular/forms';
import { RuleService } from '../../services/rule.service';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { ParamDto } from '../models/param-dto';
import { ParamService } from '../../services/param.service';

@Component({
  selector: 'app-add-rule',
  templateUrl: './add-rule.component.html',
  styleUrl: './add-rule.component.css',
  standalone: true,
  imports: [FormsModule, CommonModule, NgClass, NgFor]
})
export class AddRuleComponent implements OnInit {
  

  // constructor( private srvParam: ParamService ,private srvRule: RuleService,private router: Router,){}
  constructor(private srvRule: RuleService,private router: Router,){}



  selectedObjectType: string = ''; 
  
  showAddFormulaButton: boolean = false;
  showFormulaInputs: boolean = false;
  showObjectInputs: boolean =false;
  //objects: { name: string, order: string }[] = [];
  selectedItem = '2';
  Rule : RuleDto=new RuleDto()
  Object : ObjectDto=new ObjectDto()
  ParamDto: ParamDto[] = [];

    
  ngOnInit(): void {
console.log('succes')
// this.srvParam.getParams().subscribe((res: any) => {

//   console.log(res)
//   this.ParamDto = res
// })
  }

 


 //positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  //position = new FormControl(this.positionOptions[0]);
  addRule(): void{
    console.log(this.Rule);
    this.srvRule.addRule(this.Rule)
      .subscribe(
        (result) => { // success
          console.log(result);

          this.router.navigate(['/mfe-rule/orderComponent/listRuleComponent']);
          Swal.fire('Valider', '', 'success');  
        },
        (err) => {
          // traitement du cas d'erreur
         console.log('err');
          Swal.fire('Invalid ', '', 'error');
        }
      
        ); 


  }

  

 
  onObjectTypeChange(event: Event) {
    this.selectedObjectType = (event.target as HTMLSelectElement).value;
    console.log(this.selectedObjectType)
  }
  onAddFormulaClick(): void {
    this.showFormulaInputs = true;
  }

  AddObjectClick(): void {
    //this.srvRule.saveData().subscribe(() => {
      console.log('data saved');
      window.location.reload();
    //});
  }


}