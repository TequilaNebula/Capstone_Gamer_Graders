import { Component, OnInit } from '@angular/core';
import { GameCard } from './game-card.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  gameList: GameCard[] = [
    {name: 'Game 1', date: new Date()},
    {name: 'Game 2', date: new Date()},
    {name: 'Game 3', date: new Date()},
    {name: 'Game 4', date: new Date()},
    {name: 'Game 5', date: new Date()},
    {name: 'Game 6', date: new Date()},
    {name: 'Game 7', date: new Date()},
    {name: 'Game 8', date: new Date()},
    {name: 'Game 9', date: new Date()},
    {name: 'Game 10', date: new Date()},
  ];

  constructor() {
    //TODO fetch games from server
   }

  ngOnInit(): void {
  }

}