import {Component} from 'angular2/core';
//2 interesting points: '.' and 'no extension'
// '.' current directory is required to explicitly state this
// 'no extension' systemjs determines this and default is '.js'
import {ContactHeaderComponent} from './contact-header-component/contact-header-component';
import {Contact} from './models/contact';
import {CONTACT_DATA} from './data/contact-data';

@Component({
    selector: 'contacts-app',
    styleUrls: ['app/contacts-app.css'],
    directives: [ContactHeaderComponent],
    template: `
<contact-header-component></contact-header-component>
    <ul class="collection">
        <li *ngFor="#contact of contacts" class="collection-item avatar">
            <img [src]="contact.image" alt="" class="circle">
            <span class="title">{{contact.name}}</span>
        </li>
    </ul>`
})
export class ContactsApp {
    /* 
        Note: notice that block scope in ngFor syntax prevents problems
        if the below is commented out.
     */
    // contact:Contact = {
    //     id: 7,
    //     name: 'Diana Ellis',
    //     email: '',
    //     phone: '',
    //     birthday: '',
    //     website: '',
    //     image: '/assets/images/7.jpg',
    //     address: {
    //         street: '6554 park lane',
    //         zip: '43378',
    //         city: 'Rush',
    //         country: 'United States'
    //     }
    // }
    contacts:Array<Contact> = CONTACT_DATA
}