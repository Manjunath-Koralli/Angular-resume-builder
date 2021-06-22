import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularCreatePdfModule } from 'angular-create-pdf';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ResumeComponent } from './components/resume/resume.component';
import { CvTemplatesComponent } from './components/cv-templates/cv-templates.component';
import { HomeComponent } from './components/home/home.component';
import { IonicModule } from '@ionic/angular';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoverLettersComponent } from './components/cover-letters/cover-letters.component';
import { FooterComponent } from './components/footer/footer.component';
import { BasicResumeComponent } from './components/resumes/basic-resume/basic-resume.component';
import { ExecutiveResumeComponent } from './components/resumes/executive-resume/executive-resume.component';
import { BasicPreviewComponent } from './components/previews/basic-preview/basic-preview.component';
import { ExecutivePreviewComponent } from './components/previews/executive-preview/executive-preview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    CvTemplatesComponent,
    HomeComponent,
    CoverLettersComponent,
    FooterComponent,
    BasicResumeComponent,
    ExecutiveResumeComponent,
    BasicPreviewComponent,
    ExecutivePreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    AngularCreatePdfModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatChipsModule,
    MatCheckboxModule,
    MatTooltipModule,
    FontAwesomeModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
