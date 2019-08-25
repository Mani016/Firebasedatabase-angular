import { Component, Injectable, ChangeDetectionStrategy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DescriptionComponent } from './description/description.component';
import { NavigationExtras, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DescriptionComponent]
})
export class AppComponent {
  title = 'Angular Firebase';
  items: Observable<any[]>;
  id :number;
  value: any;
  constructor(private db: AngularFirestore,private desc:DescriptionComponent,private router:Router) {
   
      this.items = this.db.collection('/speaker').valueChanges();
      console.log("Success",this.items);
 
  }
  description(id){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id:id
      }
  };
  this.router.navigate(["description"], navigationExtras);
  }
 


  

  
 }
