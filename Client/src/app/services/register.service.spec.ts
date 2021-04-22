import { TestBed } from '@angular/core/testing';
import { RegisterService } from './register.service';
import {  HttpClient, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {User } from './user'

describe('RegisterService', () => {
  let httpClient: HttpClient;
  let service: RegisterService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [
      HttpClientTestingModule
  ]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(RegisterService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  let mockData = {name: 'John Doe', role: 'Project Manager', email: 'johndoe@example.com', password: 'Password123!'}
  it('should add a user and return it', () => {
    const newUser: User = mockData;

    service.addUser(newUser).subscribe(
      data => expect(data).toEqual(newUser, 'should return the user'),
      fail
    );

    const req = httpTestingController.expectOne(service.loginUrl);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(newUser);

    const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: newUser });
    req.event(expectedResponse);
  });


}); 
  



