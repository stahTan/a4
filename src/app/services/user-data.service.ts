import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Video from '../Models/video';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  //store video in user's playlist

  private playList:Video[] = []

  //observable
  playListObservable = new BehaviorSubject<Video[]>([])

  constructor() { }


  //add video to user's playlist
  addVideo = (video:Video) => {
    this.playList.push(video)
    this.playListObservable.next(this.playList)
    console.log(this.playListObservable)
  }

  //retrieve all videos in user's playlist
  getPlaylist = () => {
    console.log(this.playList)
    return this.playList
  }

  //clear playlist
  clearAll = () => {
    this.playList = []
    this.playListObservable.next(this.playList)
  }
  
}
