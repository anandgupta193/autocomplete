import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuandooAutocompleteComponent } from './quandoo-autocomplete.component';
import { AppModule } from '../../app.module';

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
});
