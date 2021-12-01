//TEST DE BDD
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  it('should be created', () => {
    expect(service).not.toBeNull();
  });
});

// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AuthService } from './auth.service';

// describe('RegisterComponent', () => {
//   let component: RegisterComponent;
//   let fixture: ComponentFixture<RegisterComponent>;

// beforeEach(async () => {
//     TestBed.configureTestingModule({
//       declarations: [ RegisterComponent ],
//       imports: [ HttpClientTestingModule, RouterTestingModule ],
//       providers: [{provide: RegisterComponent}],
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(RegisterComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
