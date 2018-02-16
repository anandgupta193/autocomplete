
import { QuandooAutocompleteComponent } from './quandoo-autocomplete/quandoo-autocomplete.component';
import { HomeComponent } from './home/home.component';

export const routes = [
    { path: 'autocomplete', component: QuandooAutocompleteComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: 'home' }
];
