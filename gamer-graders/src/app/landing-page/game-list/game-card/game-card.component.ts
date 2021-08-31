import { Component, Input, OnInit } from '@angular/core';
import { GameCard } from '../game-card.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent {

  @Input() card!: GameCard;

}
