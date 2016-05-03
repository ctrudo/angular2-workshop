import {Component} from 'angular2/core';
import {ContactsService} from '../contacts-service/contacts-service';
import {OnInit} from 'angular2/core';
import {Contact} from '../models/contact';

@Component({
  selector: 'contacts-list-component',
  templateUrl: 'app//contacts-list-component/contacts-list-component.html',
  styleUrls: ['app//contacts-list-component/contacts-list-component.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class ContactsListComponent implements OnInit {
  contacts:Array<Contact>;
  constructor(private contactsService: ContactsService) {
    
  }
  
  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

}
