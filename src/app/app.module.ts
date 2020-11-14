import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { EditorModule } from "@tinymce/tinymce-angular";
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { MaterialModule } from './material.module'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { EditorModule } from '@progress/kendo-angular-editor';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
// import { LottieAnimationViewModule } from 'ng-lottie';
// import { LottieModule } from 'ngx-lottie';
// import player from 'lottie-web';
// export function playerFactory() {
//   return player;
// }
// {
//   apiKey: "AIzaSyALzWRtoJDEgPQM1VhnPejibKWYFIQJR5U",
//   authDomain: "komodo-1574b.firebaseapp.com",
//   databaseURL: "https://komodo-1574b.firebaseio.com",
//   projectId: "komodo-1574b",
//   storageBucket: "komodo-1574b.appspot.com",
//   messagingSenderId: "111321603806",
//   appId: "1:111321603806:web:43a057793c6e10667dac4f",
//   measurementId: "G-RZMJ2ZLEBP"
// }
const firebaseConfig = {
  apiKey: "AIzaSyALzWRtoJDEgPQM1VhnPejibKWYFIQJR5U",
  authDomain: "komodo-1574b.firebaseapp.com",
  databaseURL: "https://komodo-1574b.firebaseio.com",
  projectId: "komodo-1574b",
  storageBucket: "komodo-1574b.appspot.com",
  messagingSenderId: "111321603806",
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EditorModule,
    AngularEditorModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    // LottieModule.forRoot({ player: playerFactory }),
    // LottieAnimationViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
