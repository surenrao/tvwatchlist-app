import { Component,OnInit } from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_GRID_LIST_DIRECTIVES} from '@angular2-material/grid-list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {Http} from '@angular/http';
import './rxjs-operators';
import {MockDataService} from './mock-data.service'

@Component({
  moduleId: module.id,
  selector: 'tv-watchlist-app',
  templateUrl: 'tv-watchlist-app.component.html',
  styleUrls: ['tv-watchlist-app.component.css'],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_GRID_LIST_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdIcon
  ],
  providers: [ MdIconRegistry, MockDataService],
})
export class TvWatchlistAppComponent implements OnInit {

  constructor(private mockDataService: MockDataService) { }

  formShowing = false;
  title = 'app works!';
  show_list:any;
  selectedShow:any;
  addTest(){
    alert('Test');
  }
  
  displayDetails(show:any, sidenav:any){
     sidenav.open();
     this.selectedShow = show;
  }

  getKeys(obj:any){
    return Object.keys(obj);
  }

  getEpisodeName(episode:any){
    let tick = episode.seen ? '&#10004;':''; 
    return `${episode.counter}.(${episode.season}x${episode.number}) ${episode.name} ${tick}`;
  }

  ngOnInit(){
    this.mockDataService.restoreData()
                     .subscribe(
                       data => {
                         //console.log(data);
                         this.show_list = data.show_list;
                        },
                       error =>  console.log(error)
                       );
  }
  
}
