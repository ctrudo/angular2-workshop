import {bootstrap} from 'angular2/platform/browser';
import {ContactsApp} from './app/contacts-app';

let a = new ContactsApp();
a.greatTime();
bootstrap(ContactsApp);