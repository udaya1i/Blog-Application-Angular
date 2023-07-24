import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SingleCatagoryComponent } from './pages/single-catagory/single-catagory.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermConditionsComponent } from './pages/term-conditions/term-conditions.component';
import { PostCardComponent } from './layout/post-card/post-card.component';
import { CommentFormComponent } from './comment/comment-form/comment-form.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { SubscriptionComponent } from './superadmin/subscription/subscription.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'single-catagory',
    component: SingleCatagoryComponent
  },
  {
    path: 'single-post',
    component: SinglePostComponent
  },
  {
    path: 'term-condition',
    component: TermConditionsComponent
  },
  {
    path:'comment',
    component:CommentFormComponent
  },
  {
    path:'comment-list',
    component:CommentListComponent
  },
  {
    path:'superadmin-subscription',
    component:SubscriptionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
