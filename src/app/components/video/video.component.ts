import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Video from 'src/app/Models/video';
import { UserDataService } from 'src/app/services/user-data.service';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  
  //properties
  @Input() oneVideo:Video = {} as Video
  inPlaylist:boolean = false

  constructor(private userService:UserDataService, public router:Router) { }

  
  ngOnInit(): void {
    this.userService.playListObservable.subscribe((updatedTeamList)=>{
      if(updatedTeamList.length === 0){
        this.inPlaylist = false
      }
    })
  }
  
  toHide = () =>{
    if(this.router.url ==="/playlist"){
      return "hidden"
    }
    return "visible"
  }
  addToPlaylist = () =>{
    this.userService.addVideo(this.oneVideo)
    this.inPlaylist = true
  }

  

}
