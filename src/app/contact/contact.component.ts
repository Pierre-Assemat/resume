import { Component, Input } from '@angular/core';

import { Contact } from '../models/profile';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input()
  contactInfo: Contact;

  constructor() {}
}
