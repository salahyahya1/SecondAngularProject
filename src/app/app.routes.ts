import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MealsComponent } from './meals/meals.component';
import { TeamComponent } from './team/team.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SeafoodComponent } from './seafood/seafood.component';
import { PastaComponent } from './pasta/pasta.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
// import { NgModule } from '@angular/core';

export const routes: Routes = [

    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent, title: 'home' },
    { path: "about", component: AboutComponent, title: 'about' },
    {
        path: "meals", component: MealsComponent, title: 'meals', children: [
            { path: "", redirectTo: "seafood", pathMatch: "prefix" },
            { path: "seafood", component: SeafoodComponent, title: 'seafood' },
            { path: "pasta", component: PastaComponent, title: 'pasta' },
            { path: "breakfast", component: BreakfastComponent, title: 'breakfast' }]
    },
    {
        path: "team", component: TeamComponent, title: 'team'
    },
    { path: "contacts", component: ContactsComponent, title: 'contacts' },
    { path: "**", component: ContactsComponent, title: 'faild to get badge' }
];