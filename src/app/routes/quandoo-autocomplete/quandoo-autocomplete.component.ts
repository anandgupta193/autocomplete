import { Component, OnInit, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quandoo-autocomplete',
  templateUrl: './quandoo-autocomplete.component.html',
  styleUrls: ['./quandoo-autocomplete.component.css']
})
export class QuandooAutocompleteComponent implements OnInit {

  public query = '';
  public countries = [ 'Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan', 'Belarus',
                      'Belgium', 'Bosnia & Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus',
                      'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Georgia',
                      'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Kosovo',
                      'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Malta',
                      'Moldova', 'Monaco', 'Montenegro', 'Netherlands', 'Norway', 'Poland',
                      'Portugal', 'Romania', 'Russia', 'San Marino', 'Serbia', 'Slovakia', 'Slovenia',
                      'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'United Kingdom', 'Vatican City'];
  public filteredList = [];
  public elementRef;
  constructor(myElement: ElementRef) {
    this.elementRef = myElement;
  }

  filter() {
    if (this.query !== '') {
        this.filteredList = this.countries.filter(el => {
            return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        });
    } else {
        this.filteredList = [];
    }
}

select(item) {
    this.query = item;
    this.filteredList = [];
}

  ngOnInit() {
  }

}
