import { Component, Input, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import Video from 'src/app/Models/video';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-myplaylistscreen',
  templateUrl: './myplaylistscreen.component.html',
  styleUrls: ['./myplaylistscreen.component.css']
})
export class MyplaylistscreenComponent implements OnInit {

  // variable to store data fetched by service
  currPlayList:Video[] = [{id:"string",
    thumbnail_360_url:"string",
    created_time:213433431,
    views_total:3443,
    title:"string",
    "owner.username":"string",
    "owner.avatar_80_url":"string"}]
  playListSubscription = new Subscription()
  noVideo:boolean = true

  //injecting service
  constructor(private userService:UserDataService) { }

  //after component loads, get data from service

  ngOnInit(): void {
    this.currPlayList = this.userService.getPlaylist()
    console.log(this.currPlayList)
    this.playListSubscription = this.userService.playListObservable.subscribe(
      (dataFromObservable)=>{
        this.currPlayList = dataFromObservable
        console.log(this.currPlayList)
        if (this.currPlayList.length > 0) {
          this.noVideo = false
          return;
        }
    })
  }

  ngOnDestroy(){
    this.playListSubscription.unsubscribe()
  }

  clearPlaylist = () => {
    this.userService.clearAll()
    this.noVideo = true
  }
    

}
