import {Component} from 'angular2/core';
import {ContactHeaderComponent} from './contact-header-component/contact-header-component';

@Component({
    selector: 'contacts-app',
    styleUrls: ['app/contacts-app.css'],
    directives: [ContactHeaderComponent],
    template: '<contact-header-component></contact-header-component>'
})
export class ContactsApp {
    constructor() {}
}