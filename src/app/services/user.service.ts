import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  Register(User:any) {
    return this.http.post(
    
      'https://gestionannonces-4c290-default-rtdb.firebaseio.com/user.json',
      
      User
    );
  }
  
  getAllUsers() {
    return this.http.get(
      'https://gestionannonces-4c290-default-rtdb.firebaseio.com/user.json'
    );
  }
}