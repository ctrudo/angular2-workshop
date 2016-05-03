import {Component} from 'angular2/core';
//2 interesting points: '.' and 'no extension'
// '.' current directory is required to explicitly state this
// 'no extension' systemjs determines this and default is '.js'
import {ContactHeaderComponent} from './contact-header-component/contact-header-component';
import {Contact} from './models/contact';
import {ContactsService} from './contacts-service/contacts-service';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {ContactsListComponent} from './contacts-list-component/contacts-list-component';

@Component({
    selector: 'contacts-app',
    styleUrls: ['app/contacts-app.css'],
    directives: [ContactHeaderComponent, ROUTER_DIRECTIVES],
    providers: [ContactsService, ROUTER_PROVIDERS],
    template: `
    <contact-header-component></contact-header-component>
    <router-outlet></router-outlet>
`
})
@RouteConfig([
    {
        path: '/',
        component: ContactsListComponent,
        name: 'ContactList'
    }    
])
export class ContactsApp{    
   
    constructor(){
        //syntactic sugar allows us to not need to explicitly assign
        //contactsService for use in ngOnInit
    }
}