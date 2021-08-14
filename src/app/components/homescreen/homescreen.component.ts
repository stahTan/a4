import { Component, Input, OnInit } from '@angular/core';
import Video from 'src/app/Models/video';
import { DailyMotionService } from 'src/app/services/daily-motion.service';



@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {

  //properties
  searchList:Video[] = []
  searchWord:string = ""


  constructor(private data:DailyMotionService) { }

  ngOnInit(): void {
    
  }

  getWords = (words:string) =>{
    
    this.searchWord = words.replace(/ /g,"+")
    
    this.data.getKeyword(this.searchWord)
    
    this.data.getVideoFromAPI().subscribe((dataFromApi:any)=>{
      this.searchList = dataFromApi.list
      
    })
  }

}
