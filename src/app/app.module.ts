import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RootComponent } from './root/root.component';
import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserService } from './user.service';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';
import { RouterModule, RoutesRecognized, ROUTES } from '@angular/router';



@NgModule({
  declarations: [
      DescriptionComponent,
      AppComponent,
      RootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
       ReactiveFormsModule,
       AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        RouterModule.forRoot([]),AppRoutingModule
  ],
 
  bootstrap: [RootComponent]
})
export class AppModule { }
