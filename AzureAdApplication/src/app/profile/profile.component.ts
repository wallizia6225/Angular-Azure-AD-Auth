import { Component, OnInit } from '@angular/core';
import { AzureAdCustomProviderService } from '../azure-ad-custom-provider.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Profile } from './profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile? : Profile
  profilePic?: SafeResourceUrl;


  constructor (private azureAdDemoService: AzureAdCustomProviderService,
    private domSanitizer: DomSanitizer) { }


  ngOnInit(): void {
    this.getProfile();
    this.getProfilePicture();
  }


  getProfile(){
     this.azureAdDemoService.getUserProfile()
         .subscribe(profileInfo => {
            this.profile = profileInfo;
         });
  }

  getProfilePicture(){
    this.azureAdDemoService.getProfilePic()
      .subscribe(response => {
        var urlCreator = window.URL || window.webkitURL
        this.profilePic = this.domSanitizer.bypassSecurityTrustResourceUrl(urlCreator.createObjectURL(response));
      });
  }
}
