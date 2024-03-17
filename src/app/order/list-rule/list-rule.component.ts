import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RuleDto } from '../models/rule-dto';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RuleService } from '../../services/rule.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-list-rule',
  standalone: true,
    imports: [NgFor, NgClass,MatTableModule, MatPaginatorModule],
  templateUrl: './list-rule.component.html',
  styleUrl: './list-rule.component.css'
})
export class ListRuleComponent {
  RuleDto: RuleDto[] = [];
  
  // constructor(private srv: RuleService , private router: Router) {}
  constructor( private router: Router) {}

  ngOnInit(): void {
    console.log("hhhh")
    //this.srv.getRuls().subscribe((res: any) => {

      // console.log(res)
      // this.RuleDto = res
    }
  }



//   deleteRule(ruleId: any) {
//   // Afficher un message d'alerte de confirmation avant la suppression
//   Swal.fire({
//     title: 'Êtes-vous sûr?',
//     text: 'Cette action est irréversible et supprimera la règle.',
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonText: 'Oui, supprimer!',
//     cancelButtonText: 'Annuler'
//   }).then((result) => {
//     if (result.isConfirmed) {
//       // L'utilisateur a cliqué sur "Oui, supprimer"
//       this.srv.removeRule(ruleId)
//         .subscribe(
//           (result) => { // succès
//             console.log(result);
//             Swal.fire('La règle est supprimée avec succès', '', 'success');
//             window.location.reload();
//           },
//           (err) => {
//             // traitement du cas d'erreur
//             console.log(err);
//             Swal.fire('La règle est supprimée avec succès', '', 'success');
//             window.location.reload();
//           }
//         );
//     } else {
//       // L'utilisateur a cliqué sur "Annuler" ou a cliqué en dehors de la boîte de dialogue
//       Swal.fire('Suppression annulée', '', 'info');
//     }
//   });
// }




// editWorkflow(id: number): void {
//   console.log(`Modification du workflow avec l'ID ${id}`);
// }

// viewWorkflow(id: number): void {
//   console.log(`Voir les détails du workflow avec l'ID ${id}`);
// }


// nav(workflowId : any) {
//   this.router.navigate(['/mfe1/orderComponent/editComponent/',workflowId]);
// }






