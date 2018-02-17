import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutocompleteService } from '../../shared/services/autocomplete.service';

@Component({
  selector: 'app-quandoo-autocomplete',
  templateUrl: './quandoo-autocomplete.component.html',
  styleUrls: ['./quandoo-autocomplete.component.css']
})
export class QuandooAutocompleteComponent implements OnInit {

  public query = '';
  public filteredList = [];
  public dogBreed = [];
  public errorMessageFlag = false;
  constructor(private autocompleteService: AutocompleteService) {}

  filter() {
    if (this.query !== '') {
        this.filteredList = this.dogBreed.filter(el => {
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
    this.autocompleteService.getDogBreedsList().subscribe(list => {
      this.dogBreed = list['message'];
    }, error => {
      this.errorMessageFlag = true;
    });
  }

}
