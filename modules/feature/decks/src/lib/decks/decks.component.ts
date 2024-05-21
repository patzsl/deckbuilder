import { Component, OnInit } from '@angular/core';
import { AuthService, DeckService } from 'modules/data-access/pokemon';
import { Pokemon } from 'modules/data-access/pokemon/src/lib/models/pokemon';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

interface Deck {
  id: number;
  name: string;
  cards: Pokemon[];
  showCards?: boolean;
}

@Component({
  selector: 'lib-decks',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.scss'],
})
export class DecksComponent implements OnInit {
  username: string | null = null;
  decks: Deck[] = [];

  mockCards = [
    {
      id: 'pl2-113',
      name: 'Flying Pikachu',
      nationalPokedexNumber: 25,
      imageUrl: 'https://images.pokemontcg.io/pl2/113.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/pl2/113_hires.png',
      types: ['Lightning'],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: '113',
      artist: 'Toshinao Aoki',
      rarity: 'Rare Holo',
      series: 'Platinum',
      set: 'Rising Rivals',
      setCode: 'pl2',
      attacks: [
        {
          cost: ['Lightning'],
          name: 'Thundershock',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
          damage: '10',
          convertedEnergyCost: 1,
        },
        {
          cost: ['Colorless', 'Colorless', 'Colorless'],
          name: 'Fly',
          text: "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of an attack, including damage, done to Flying Pikachu during your opponent's next turn.",
          damage: '30',
          convertedEnergyCost: 3,
        },
      ],
      resistances: [
        {
          type: 'Fighting',
          value: '-30',
        },
      ],
    },
    {
      id: 'xy8-48',
      name: 'Pikachu',
      nationalPokedexNumber: 25,
      imageUrl: 'https://images.pokemontcg.io/xy8/48.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/xy8/48_hires.png',
      types: ['Lightning'],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '60',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: '48',
      artist: 'Kouki Saitou',
      rarity: 'Common',
      series: 'XY',
      set: 'BREAKthrough',
      setCode: 'xy8',
      attacks: [
        {
          cost: ['Lightning'],
          name: 'Gnaw',
          text: '',
          damage: '10',
          convertedEnergyCost: 1,
        },
        {
          cost: ['Colorless', 'Colorless'],
          name: 'Agility',
          text: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
          damage: '10',
          convertedEnergyCost: 2,
        },
      ],
      resistances: [
        {
          type: 'Metal',
          value: '-20',
        },
      ],
      weaknesses: [
        {
          type: 'Fighting',
          value: 'x2',
        },
      ],
    },
    {
      id: 'pop2-16',
      name: 'Pikachu',
      nationalPokedexNumber: 25,
      imageUrl: 'https://images.pokemontcg.io/pop2/16.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/pop2/16_hires.png',
      types: ['Lightning'],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: '16',
      artist: 'Yuka Morii',
      rarity: 'Common',
      series: 'POP',
      set: 'POP Series 2',
      setCode: 'pop2',
      attacks: [
        {
          cost: ['Colorless'],
          name: 'Gnaw',
          text: '',
          damage: '10',
          convertedEnergyCost: 1,
        },
        {
          cost: ['Lightning', 'Colorless'],
          name: 'Thunder Jolt',
          text: 'Flip a coin. If tails, Pikachu does 10 damage to itself.',
          damage: '30',
          convertedEnergyCost: 2,
        },
      ],
      weaknesses: [
        {
          type: 'Fighting',
          value: 'x2',
        },
      ],
    },
    {
      id: 'pop9-15',
      name: 'Pikachu',
      nationalPokedexNumber: 25,
      imageUrl: 'https://images.pokemontcg.io/pop9/15.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/pop9/15_hires.png',
      types: ['Lightning'],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '60',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: '15',
      artist: 'Midori Harada',
      rarity: 'Common',
      series: 'POP',
      set: 'POP Series 9',
      setCode: 'pop9',
      attacks: [
        {
          cost: ['Colorless'],
          name: 'Growl',
          text: "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 20 (before applying Weakness and Resistance).",
          damage: '',
          convertedEnergyCost: 1,
        },
        {
          cost: ['Lightning', 'Colorless', 'Colorless'],
          name: 'Numb',
          text: 'If Pikachu evolved from Pichu during this turn, the Defending Pokémon is now Paralyzed.',
          damage: '30',
          convertedEnergyCost: 3,
        },
      ],
      resistances: [
        {
          type: 'Metal',
          value: '-20',
        },
      ],
      weaknesses: [
        {
          type: 'Fighting',
          value: 'x2',
        },
      ],
    },
  ];

  constructor(
    private authService: AuthService,
    private deckService: DeckService
  ) {}

  ngOnInit() {
    this.authService.username$.subscribe((username) => {
      this.username = username;
      if (username) {
        this.deckService.setDecksForUser(username, []); // Inicializa com baralhos vazios
      }
    });
    this.deckService.decks$.subscribe((decks) => {
      this.decks = decks.map((deck) => ({
        ...deck,
        cards: deck.cards.map((card) =>
          typeof card === 'string' ? JSON.parse(card) : card
        ),
      }));
    });
  }

  createDeck(deckName: string, cards: Pokemon[]) {
    const newDeck: Deck = { id: 123, name: deckName, cards }; // TODO: instalar uuid e substituir o 123 por um id dinamico
    this.deckService.addDeck(newDeck);
  }
}
