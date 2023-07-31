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
import { DashboardComponent } from './superadmin/dashboard/dashboard.component';
import { CategoryComponent } from './superadmin/category/category.component';
import { AllPostComponent } from './superadmin/post/all-post/all-post.component';
import { NewPostComponent } from './superadmin/post/new-post/new-post.component';
import { LoginComponent } from './superadmin/login/login.component';

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
    path:'superadmin-dashboard',
    component:DashboardComponent
  },
  {
    path:'category',
    component:CategoryComponent
  }, 
  {
    path:'posts',
    component:AllPostComponent
  },
  {
    path:'post/new',
    component:NewPostComponent
  },
  {
    path:'auth/login',
    component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
