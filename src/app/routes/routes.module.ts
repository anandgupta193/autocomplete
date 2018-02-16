import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { routes } from './routes';
import { QuandooAutocompleteComponent } from './quandoo-autocomplete/quandoo-autocomplete.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        FormsModule,
        CommonModule
    ],
    declarations: [QuandooAutocompleteComponent, HomeComponent],
    exports: [
        RouterModule
    ]
})

export class RoutesModule {
    constructor() {}
}
