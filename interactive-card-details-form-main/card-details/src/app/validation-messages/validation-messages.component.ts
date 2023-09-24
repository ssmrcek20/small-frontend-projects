import { style, transition, trigger, animate } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('150ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('150ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ValidationMessagesComponent {
  @Input() control: any;

  isSpecificControl(controlName: string): boolean {
    return this.control?.name === controlName;
  }
}
