import { Injectable } from '@angular/core';
import Video from '../Models/video';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailyMotionService {
  
  keyword:string = ""
  videoList:Video[] = []

  constructor(private http:HttpClient) { }

  //function to retrieve a list of videos that meet a specific search keyworkd
  getVideoFromAPI = ():Observable<Video[]> => {
    return this.http.get<any>(this.keyword)

    //Observable
    
  }
  setVideos = (dataList:Video[]) =>{
      this.videoList = dataList
    
  }
  getKeyword = (words:string) =>{
    let str:string = "https://api.dailymotion.com/videos?fields=id%2Cthumbnail_360_url%2Ccreated_time%2Cviews_total%2Ctitle%2Cowner.username%2cowner.avatar_80_url&search="
    this.keyword = str + words;

  }
}
