import {Injectable} from 'angular2/core';
import {CONTACT_DATA} from '../data/contact-data';
import {Contact} from '../models/contact';

//currently a best practice add @Injectable on all services
@Injectable()
export class ContactsService {

  constructor() {}

  getContacts() : Contact[] {
    return CONTACT_DATA;
  }
}
