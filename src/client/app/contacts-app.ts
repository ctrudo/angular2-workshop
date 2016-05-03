import {Component} from 'angular2/core';

@Component({
    selector: 'contacts-app',
    template: "Hello World!"
})

export class ContactsApp{
    constructor(){
        
    }

    getContacts(){
        return "stink";
    }
}