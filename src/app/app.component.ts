import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';
  // loadedFeature = 'shopping-list';  //to load the other one by default
  
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }

}
