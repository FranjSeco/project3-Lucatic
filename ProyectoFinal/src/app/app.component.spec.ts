//TEST DE BDD
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('RegisterComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [{provide: AppComponent}],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ProyectoFinal'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ProyectoFinal');
  });
});

