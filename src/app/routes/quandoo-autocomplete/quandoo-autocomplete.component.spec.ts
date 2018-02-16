import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuandooAutocompleteComponent } from './quandoo-autocomplete.component';

describe('QuandooAutocompleteComponent', () => {
  let component: QuandooAutocompleteComponent;
  let fixture: ComponentFixture<QuandooAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuandooAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuandooAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
