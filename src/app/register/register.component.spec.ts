import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import {ReactiveFormsModule} from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkWithHref } from '@angular/router';
import {By} from "@angular/platform-browser";


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render the logo', async () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img').src).toContain('/assets/bug-group.svg');
  });
  it('should have a link to /login', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'] === '/login';
    });
    expect(index).toBeGreaterThan(-1);
  });
  it('form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
});

it('name field validity', () =>{
  let errors = {};
  let name = component.registerForm.controls['name']
  expect(name.valid).toBeFalsy();
  
  errors = name.hasError || {};
  expect(name.hasError('required')).toBeTruthy();
  
  name.setValue("test");
  errors = name.errors || {};
  expect(name.hasError('required')).toBeFalsy();
});

it('role field validity', () =>{
  let errors = {};
  let role = component.registerForm.controls['role']
  expect(role.valid).toBeFalsy();
  
  errors = role.hasError || {};
  expect(role.hasError('required')).toBeTruthy();
  
  role.setValue("Project Manager");
  errors = role.errors || {};
  expect(role.hasError('required')).toBeFalsy();
  
  role.setValue("Team Lead");
  errors = role.errors || {};
  expect(role.hasError('required')).toBeFalsy();
  
  role.setValue("Developer");
  errors = role.errors || {};
  expect(role.hasError('required')).toBeFalsy();
});

it('email field validity', () => {
  let errors = {};
  let email = component.registerForm.controls['email'];
  expect(email.valid).toBeFalsy();

  errors = email.hasError || {};
  expect(email.hasError('required')).toBeTruthy();

  email.setValue("test");
  errors = email.errors || {};
  expect(email.hasError('required')).toBeFalsy();
  expect(email.hasError('email')).toBeTruthy();

  email.setValue("test@example.com");
  errors = email.errors || {};
  expect(email.hasError('required')).toBeFalsy();
  expect(email.hasError('email')).toBeFalsy();
});

it('password field validity', () => {
  let errors = {};
  let password = component.registerForm.controls['password'];
  expect(password.valid).toBeFalsy();

  errors = password.hasError || {};
  expect(password.hasError('required')).toBeTruthy();

  password.setValue("test");
  errors = password.errors || {};
  expect(password.hasError('required')).toBeFalsy();
  expect(password.hasError('minlength')).toBeTruthy();

  password.setValue("testingpassword");
  errors = password.errors || {};
  expect(password.hasError('required')).toBeFalsy();
  expect(password.hasError('minlength')).toBeFalsy();
  expect(password.hasError('pattern')).toBeTruthy();

  password.setValue("testingPassword123!");
  errors = password.errors || {};
  expect(password.hasError('required')).toBeFalsy();
  expect(password.hasError('minlength')).toBeFalsy();
  expect(password.hasError('pattern')).toBeFalsy();
});


});
