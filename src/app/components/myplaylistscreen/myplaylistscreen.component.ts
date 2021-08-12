import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import Video from 'src/app/Models/video';

@Component({
  selector: 'app-myplaylistscreen',
  templateUrl: './myplaylistscreen.component.html',
  styleUrls: ['./myplaylistscreen.component.css']
})
export class MyplaylistscreenComponent implements OnInit {

  // variable to store data fetched by service
  playList:Video[] = []

  //injecting service
  constructor(private serviceLayer:UserDataService) { 

  }

  //after component loads, get data from service
  showPlayList = () => {
    this.playList = this.serviceLayer.getVideoList()
  }
  ngOnInit(): void {
  }

  clearPlaylist = () => {
    
  }

}
