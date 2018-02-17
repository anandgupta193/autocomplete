import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuandooAutocompleteComponent } from './quandoo-autocomplete.component';
import { AppModule } from '../../app.module';
import { AutocompleteService } from '../../shared/services/autocomplete.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('QuandooAutocompleteComponent', () => {
  let component: QuandooAutocompleteComponent;
  let fixture: ComponentFixture<QuandooAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuandooAutocompleteComponent);
    component = fixture.componentInstance;
    const carBrandService = fixture.debugElement.injector.get(AutocompleteService);
    spyOn(carBrandService, 'getDogBreedsList').and.returnValue(Observable.of({
      'status': 'success',
      'message': [
          'affenpinscher',
          'african',
          'airedale',
          'akita'
      ]
    }));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have default query as title ''`, async(() => {
    fixture = TestBed.createComponent(QuandooAutocompleteComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.query).toEqual('');
  }));

  it(`should execute getDogBreedsList() and reply with mock data`, async(() => {
    fixture = TestBed.createComponent(QuandooAutocompleteComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.dogBreed.length).toEqual(4);
  }));



});
