import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ig-auto';

  constructor(private service: AppService){

  }

  ngOnInit(){
    this.getDataFromAI();
  }

  getDataFromAI(){
    this.service.getData().subscribe((res) =>{
      console.log('response', res);
    }, (error) => {
      console.log(error);
    });
  }
}
