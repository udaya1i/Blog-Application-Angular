import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CatagoryNavbarComponent } from './layout/catagory-navbar/catagory-navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCatagoryComponent } from './pages/single-catagory/single-catagory.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TermConditionsComponent } from './pages/term-conditions/term-conditions.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { CommentFormComponent } from './comment/comment-form/comment-form.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { HeaderComponent } from './layout/header/header.component';
import { PostCardComponent } from './layout/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CatagoryNavbarComponent,
    HomeComponent,
    SingleCatagoryComponent,
    SinglePostComponent,
    AboutComponent,
    ContactComponent,
    TermConditionsComponent,
    CommentListComponent,
    CommentFormComponent,
    SubscriptionFormComponent,
    HeaderComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
