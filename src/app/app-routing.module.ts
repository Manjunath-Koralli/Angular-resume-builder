import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverLettersComponent } from './components/cover-letters/cover-letters.component';
import { CvTemplatesComponent } from './components/cv-templates/cv-templates.component';
import { HomeComponent } from './components/home/home.component';
import { BasicPreviewComponent } from './components/previews/basic-preview/basic-preview.component';
import { ExecutivePreviewComponent } from './components/previews/executive-preview/executive-preview.component';
import { ResumeComponent } from './components/resume/resume.component';
import { BasicResumeComponent } from './components/resumes/basic-resume/basic-resume.component';
import { ExecutiveResumeComponent } from './components/resumes/executive-resume/executive-resume.component';

const routes: Routes = [
  { path: 'resume-templates', component: ResumeComponent },
  { path: 'cv-templates', component: CvTemplatesComponent },
  { path: 'cover-letters', component: CoverLettersComponent },
  { path: 'resume/resume-form', component: BasicResumeComponent },
  { path: 'resume/executive-resume', component: ExecutiveResumeComponent },
  { path: 'preview/basic-resume', component: BasicPreviewComponent },
  { path: 'preview/executive-resume', component: ExecutivePreviewComponent },

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
