import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Video from '../Models/video';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  //store video in user's playlist

  playList:Video[] = []

  //observable
  playListObservable = new BehaviorSubject<Video[]>([])

  constructor() { }


  //add video to user's playlist
  addVideo = (video:Video) => {
    this.playList.push(video)
    this.playListObservable.next(this.playList)
    
  }

  //retrieve all videos in user's playlist
  getPlaylist = () => {
    return this.playList
  }

  //clear playlist
  clearAll = () => {
    this.playList = []
    this.playListObservable.next(this.playList)
  }
  
}
