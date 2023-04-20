import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {}
  
  ngOnInit(): void {
    this.authService.autoLogin();
  }

  // no longer needed???
  // loadedFeature = 'recipe';
  // loadedFeature = 'shopping-list';  //to load the other one by default
  
  // onNavigate(feature: string){
  //   this.loadedFeature = feature;
  // }



}
