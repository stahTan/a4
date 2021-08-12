import { Injectable } from '@angular/core';
import Video from '../Models/video';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailyMotionService {
  
  constructor(private http:HttpClient) { }

  //function to retrieve a list of videos that meet a specific search keyworkd
  getVideoFromAPI = ():Observable<Video[]> => {
    return this.http.get<Video[]>("")

    //Observable
    
  }
}
