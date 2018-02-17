import { TestBed, inject } from '@angular/core/testing';

import { AutocompleteService } from './autocomplete.service';
import { AppModule } from '../../app.module';

describe('AutocompleteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    });
  });

  it('should be created', inject([AutocompleteService], (service: AutocompleteService) => {
    expect(service).toBeTruthy();
  }));
});
