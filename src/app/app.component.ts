import { Component } from '@angular/core';
import { CharacterInput } from './cards-item/cards-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'exercios-angular-semana08';
  characters: Array<CharacterInput> = [
    {
      name: "Piccolo",
      image: "../../assets/Dragon-Ball-Piccolo.jpg",
      author: "Akira Toriyama",
      description: 
        "Reencarnação do vilão Piccolo Daimaoh, personagem fictício da franquia Dragon Ball criado por Akira Toriyama."
    },
    {
      name: "Trunks",
image: "./../assets/Dragon-Ball-Trunks.jpg",
author: "Akira Toriyama",
description: 
  "É um personagem fictício da franquia Dragon Ball criado por Akira Toriyama e filho do Vegeta."
    },
    {
      name: "Goku",
image: "../../assets/Dragon-Ball-Goku.jpg",
author: "Akira Toriyama",
description: 
  "Conhecido também como Kakarotto, é o personagem protagonista da franquia Dragon Ball criado por Akira Toriyama."
    },
    {
      name: "Vegeta",
      image: "../../assets/Dragon-Ball-Vegeta.jpg",
      author: "Akira Toriyama",
      description: 
        "É um personagem da franquia Dragon Ball criado por Akira Toriyama e arqui-rival do Goku."
    },
  ];

  
}

// logInput(event: string) {
//   console.log(event);
// }