import { Component, OnInit, ChangeDetectionStrategy,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { UserService } from '../user.service';



@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
}) 
export class DescriptionComponent implements OnInit {
 id:number;
  items: Observable<any[]>;
   
  data:any = {};
  item:any;
  constructor(private db: AngularFirestore,private router: Router,private route: ActivatedRoute,private us :UserService)
   { 
    this.route.queryParams.subscribe(params => {
      this.id = params["id"];
  });
   }  
  ngOnInit() {
    this.items = this.db.collection('/Description').valueChanges();
}

}