import {Component} from 'angular2/core';

@Component({
    selector: 'contacts-app',
    styleUrls: ['app/contacts-app.css'],
    template: '<h1>Hello World!</h1>'
})
export class ContactsApp {
    constructor() {}
    
    //by default this is public; must be explicitly set to private to hide
    greatTime() {
        return "hi";
    }
}