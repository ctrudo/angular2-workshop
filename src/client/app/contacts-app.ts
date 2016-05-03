import {Component} from 'angular2/core';
//2 interesting points: '.' and 'no extension'
// '.' current directory is required to explicitly state this
// 'no extension' systemjs determines this and default is '.js'
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