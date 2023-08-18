import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from './profile/profile.model';


  const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me' ;
  const GRAPH_ENDPOINT_PIC= 'https://graph.microsoft.com/v1.0/me/photo/$value';
@Injectable({
  providedIn: 'root'
})
export class AzureAdCustomProviderService {
  isUserLoggedIn: Subject<boolean> = new Subject<boolean>();

  constructor(private httpClient: HttpClient) { }
  getUserProfile()
  {
    return this.httpClient.get<Profile> (GRAPH_ENDPOINT);
  }
  getProfilePic()
  {
    return this.httpClient.get (GRAPH_ENDPOINT_PIC,
      {responseType: 'blob' });
  }
}
