import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {CoolStorageModule} from 'angular2-cool-storage';
import {FormsModule} from '@angular/forms';
import {FileSelectDirective} from 'ng2-file-upload';

import {UsersService} from './services/users.service';
import {CoursesService} from './services/courses.service';
import {GroupsService} from './services/groups.service';
import {AuthenticationService} from './services/authentication.service';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {AppRoutingModule} from './app-routing.module';
import {ProfileComponent} from './components/profile/profile.component';
import {AboutComponent} from './components/about/about.component';
import {CoursesComponent} from './components/courses/courses.component';
import {ProgressComponent} from './components/progress/progress.component';
import {SettingsComponent} from './components/settings/settings.component';
import {LogoutComponent} from './components/logout/logout.component';
import {PlainnavbarComponent} from './components/plainnavbar/plainnavbar.component';
import {LoginnavbarComponent} from './components/loginnavbar/loginnavbar.component';
import {HomeComponent} from './components/home/home.component';
import {CourseComponent} from './components/course/course.component';
import {CoursePageComponent} from './components/course-page/course-page.component';
import {FileUploadComponent} from './components/file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    AboutComponent,
    CoursesComponent,
    ProgressComponent,
    SettingsComponent,
    LogoutComponent,
    PlainnavbarComponent,
    LoginnavbarComponent,
    HomeComponent,
    CourseComponent,
    CoursePageComponent,
    FileUploadComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    CoolStorageModule,
    AppRoutingModule
  ],
  providers: [AuthenticationService, CoursesService, GroupsService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
