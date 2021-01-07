import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

   profile:any;
   repos: any;
  username: string;
  constructor(private profiledata : ProfileService) {
    
}
searchProfile() {
    this.profiledata.updateProfile(this.username);
    this.profiledata.getProfileData().subscribe(res => {
      console.log(res);
      this.profile = res;
  });
  this.profiledata.getRepos().subscribe( repos => {
    console.log(repos);
    this.repos = repos;
  })
}

  ngOnInit() {}

}
