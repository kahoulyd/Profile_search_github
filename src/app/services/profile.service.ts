import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string; 
  constructor(private http:HttpClient) { 
    console.log("ready!!!");
  }

  getProfileData() {
    return this.http.get("https://api.github.com/users/"+ this.username);
    }

  getRepos() {
    return this.http.get("https://api.github.com/users/"+ this.username + "/repos");
  }
  
  updateProfile(username:string) {
    this.username = username;

  }
}
