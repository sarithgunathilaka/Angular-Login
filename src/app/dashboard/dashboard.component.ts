import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../dashboard.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {



  dash: any;
  images: any;

  constructor(private dashService: DashboardService) { }

  ngOnInit() {
    this.dashService.getDashValues().subscribe(data => {
      this.dash = data;
      console.log('we got', this.dash[1]);


  });
    this.dashService.getDashImages().subscribe(data => {
    this.images = data;
    console.log('we got images', this.images.items[0].volumeInfo.imageLinks);


});


  }


}
