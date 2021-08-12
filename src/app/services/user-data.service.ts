import { Injectable } from '@angular/core';
import Video from '../Models/video';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  //store video in user's playlist
  videoData:Video = {} as Video
  videoList:Video[] = []
  
  //add video to user's playlist
  setVideo = (video:Video) => {
    this.videoData = video
  }
  //retrieve all videos in user's playlist

  getVideo = ():Video =>{
    return this.videoData

  }
  addVideo = (video:Video) => {
    this.videoList.push(video)
  }
  getVideoList = ():Video[] => {
    return this.videoList
  }
  constructor() { }
}
