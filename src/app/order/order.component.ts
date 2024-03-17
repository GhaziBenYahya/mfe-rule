import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-order',

  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  private showStepInfo = false;
  constructor(private zone: NgZone) {}

  toggleStepInfo() {
    this.zone.run(() => {
      this.showStepInfo = !this.showStepInfo;
    })


}
isStepInfoVisible() {
  return this.showStepInfo;
}
}
