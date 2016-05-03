import {bootstrap} from 'angular2/platform/browser';
import {ContactsApp} from './app/contacts-app';

bootstrap(ContactsApp);

let test = new ContactsApp();

test.getContacts();