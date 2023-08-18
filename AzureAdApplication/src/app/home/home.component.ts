import { Component, OnInit } from '@angular/core';
import { AzureAdCustomProviderService } from '../azure-ad-custom-provider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor (private azureAdDemoService: AzureAdCustomProviderService) { }
  ngOnInit(): void {
  this.azureAdDemoService.isUserLoggedIn.subscribe(
      x=>{
        this.isUserLoggedIn=x;
      })
  }
  isUserLoggedIn: boolean = false;
}
