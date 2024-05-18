import { Pokemon } from '../models/pokemon';

export const mockPokemons: Pokemon[] = [
  {
    id: 'xyp-XY174',
    name: 'Pikachu-EX',
    nationalPokedexNumber: 25,
    imageUrl: 'https://images.pokemontcg.io/xyp/XY174.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/xyp/XY174_hires.png',
    types: ['Lightning'],
    supertype: 'Pokémon',
    subtype: 'EX',
    hp: '130',
    retreatCost: ['Colorless'],
    convertedRetreatCost: 1,
    number: 'XY174',
    artist: '5ban Graphics',
    rarity: 'Common',
    series: 'XY',
    set: 'XY Black Star Promos',
    setCode: 'xyp',
    text: [
      'When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards.',
    ],
    attacks: [
      {
        cost: ['Lightning', 'Colorless'],
        name: 'Thunder Shock',
        text: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
        damage: '30',
        convertedEnergyCost: 2,
      },
      {
        cost: ['Lightning', 'Lightning', 'Colorless'],
        name: 'Mega Thunderbolt',
        text: 'Discard all Energy attached to this Pokémon.',
        damage: '160',
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
