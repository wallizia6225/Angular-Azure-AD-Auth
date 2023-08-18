import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatButtonModule } from '@angular/material/button';
// import {MatCardModule} from '@angular/material/card';
// import {MatListModule} from '@angular/material/list';
// import {MatDividerModule} from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MsalGuard, MsalInterceptor, MsalModule, MsalRedirectComponent } from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AzureAdCustomProviderService } from './azure-ad-custom-provider.service';

const isIE = window.navigator.userAgent.indexOf('MSIE') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatCardModule,
    // MatListModule,
    // MatDividerModule,
    MsalModule.forRoot(

      //First parameter
      new PublicClientApplication
      (
        {
          auth: {
            clientId: 'Client-Id-Here',
            redirectUri: 'http://localhost:4200',
            authority: 'https://login.microsoftonline.com/TenantIdHere'
          },
          cache: {
            cacheLocation: 'localStorage',
            storeAuthStateInCookie: isIE
          }
        }
      ),

      //Second Parameter
      {
        interactionType : InteractionType.Redirect,
        authRequest: {
          scopes: ['user.read']
        }
      },

      //Third Parameter
      {
        interactionType : InteractionType.Redirect,
        protectedResourceMap: new Map(
          [
            ['https://graph.microsoft.com/v1.0/me',['user.read']]
          ]
        )
      }

    )
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
    MsalGuard,
    AzureAdCustomProviderService
  ],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }
