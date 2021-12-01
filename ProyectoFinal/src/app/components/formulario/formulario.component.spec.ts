// //TEST DE BDD
import { ComponentFixture} from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { inject, TestBed } from '@angular/core/testing';
import { FormsModule} from '@angular/forms';
import { FormularioComponent } from './formulario.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ FormularioComponent ],
      imports: [ ReactiveFormsModule, FormsModule, HttpClientTestingModule ],
      providers: [{provide: FormularioComponent}],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', inject([FormularioComponent], (service: FormularioComponent) => {
    expect(service).not.toBeNull();
  }));


  it('should detect form is valid', () => {
    fixture.nativeElement.querySelector('button').click();

    expect(component.agregarDatosPersonales()).toEqual();
  });
  });