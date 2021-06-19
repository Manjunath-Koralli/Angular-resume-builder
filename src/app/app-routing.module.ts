import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverLettersComponent } from './components/cover-letters/cover-letters.component';
import { CvTemplatesComponent } from './components/cv-templates/cv-templates.component';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  { path: 'resume-templates', component: ResumeComponent },
  { path: 'cv-templates', component: CvTemplatesComponent },
  { path: 'cover-letters', component: CoverLettersComponent },

  { path: 'home', component: HomeComponent },
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'**', redirectTo:'/home', pathMatch:'full'},  

  
  
  // { path: 'products/:id', component: ProductDetailsComponent },
  // { path: 'products/search/:keyword', component: ProductListComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
