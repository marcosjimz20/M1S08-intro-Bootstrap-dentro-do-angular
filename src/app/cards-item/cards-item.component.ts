import { Component, Input } from '@angular/core';

export interface CharacterInput {
  name: string;
  image: string;
  author: string;
  description: string;
}

@Component({
  selector: 'app-cards-item',
  templateUrl: './cards-item.component.html',
  styleUrls: ['./cards-item.component.scss']
})


export class CardsItemComponent {
  @Input() character: CharacterInput = {
    name: "",
    image: "",
    author: "",
    description: "",
  };
}