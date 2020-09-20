import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ILoginService } from './shared/service/i.login.service';
import { LoggedInGuard } from './shared/logged-in.guard';
import { LoginService } from './shared/service/login.service';
import { StandardIoModule } from './standardio/standard-io.module';
import { AuthInterceptorService } from './shared/service/auth-interceptor.service';
import { UserService } from './shared/service/user.service';
import { IUserService } from './shared/service/i.user.service';
import { SimpleModalService } from './shared/service/simple-modal.service';
import { ModalComponent } from './modal/modal.component';
import { UserTransportService } from './shared/service/user-transport.service';
import { IUserTransportService } from './shared/service/i.user-transport.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StandardIoModule
  ],
  providers: [ 
    {provide: ILoginService, useClass: LoginService},
    {provide: IUserTransportService, useClass: UserTransportService},
    {provide: SimpleModalService},
    {provide: IUserService, useClass: UserService},
    LoggedInGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
