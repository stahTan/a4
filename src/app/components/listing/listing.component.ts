import { Component, Input, OnInit } from '@angular/core';

import Video from 'src/app/Models/video';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  @Input() videoList:Video[] = [] //needs to store either videos from search or playlist
  constructor() { }
  
  ngOnInit(): void {
  }

}
