import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name: string = "";
  welcomeMessageFromService:string;

  constructor(private route: ActivatedRoute,
              private welcomeDataService: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccesfulResponse(response),
      error => this.handleErrorResponse(error)
    )
  }

  getWelcomeMessageWithParam() {
    this.welcomeDataService.executeHelloWorldBeanServiceWithPath(this.name).subscribe(
      response => this.handleSuccesfulResponse(response),
      error => this.handleErrorResponse(error)
    )
  }

  handleSuccesfulResponse(response){
    // console.log(response.message)
    this.welcomeMessageFromService = response.message
  }

  handleErrorResponse(error){
    // console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message
  }

}
