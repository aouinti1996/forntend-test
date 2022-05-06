import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EventComponent } from './event/event.component';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import { RegisterComponent } from './register/register.component';
import { ShowEventComponent } from './show-event/show-event.component';
import { ForumContainerComponent } from './forum/forum-container/forum-container.component';
import { ForumCardComponent } from './forum/forum-card/forum-card.component';
import { ForumPostComponent } from './forum/forum-post/forum-post.component';
import { ForumPostModalComponent } from './forum/forum-post-modal/forum-post-modal.component';
import { NotificationComponent } from './notification/notification.component';
import { CommentContainerComponent } from './home/comment-container/comment-container.component';
import { CommentBoxComponent } from './home/comment-box/comment-box.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        SigninComponent,
        NotFoundComponent,
        EventComponent,
        RegisterComponent,
        ShowEventComponent,
        ForumContainerComponent,
        ForumCardComponent,
        ForumPostComponent,
        ForumPostModalComponent,
        NotificationComponent,
        CommentContainerComponent,
        CommentBoxComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        MatDialogModule,
    ],
    providers: [],
    exports: [
        HomeComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
