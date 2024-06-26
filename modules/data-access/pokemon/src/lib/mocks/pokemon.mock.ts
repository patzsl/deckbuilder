import { PokemonCollection } from '../models/pokemon';

export const mockPokemons: PokemonCollection = {
  cards: [
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
    {
      id: 'smp-SM157',
      name: 'Pikachu',
      nationalPokedexNumber: 25,
      imageUrl: 'https://images.pokemontcg.io/smp/SM157.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/smp/SM157_hires.png',
      types: ['Lightning'],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: 'Pika Shield',
        text: "This Pokémon can't be Paralyzed.",
        type: 'Ability',
      },
      hp: '60',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: 'SM157',
      artist: 'Megumi Mizutani',
      rarity: 'Promo',
      series: 'Sun & Moon',
      setCode: 'smp',
      attacks: [
        {
          cost: ['Lightning'],
          name: 'Static Shock',
          text: '',
          damage: '10',
          convertedEnergyCost: 1,
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
      id: 'ex4-43',
      name: 'Pikachu',
      nationalPokedexNumber: 25,
      imageUrl: 'https://images.pokemontcg.io/ex4/43.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/ex4/43_hires.png',
      types: ['Lightning'],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '50',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: '43',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'EX',
      set: 'Team Magma vs Team Aqua',
      setCode: 'ex4',
      attacks: [
        {
          cost: ['Colorless'],
          name: 'Agility',
          text: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Pikachu during your opponent's next turn.",
          damage: '',
          convertedEnergyCost: 1,
        },
        {
          cost: ['Lightning', 'Colorless'],
          name: 'Thundershock',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
          damage: '20',
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
      id: 'sm9-33',
      name: 'Pikachu & Zekrom-GX',
      nationalPokedexNumber: 25,
      imageUrl: 'https://images.pokemontcg.io/sm9/33.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/sm9/33_hires.png',
      types: ['Lightning'],
      supertype: 'Pokémon',
      subtype: 'GX',
      hp: '240',
      retreatCost: ['Colorless', 'Colorless', 'Colorless'],
      convertedRetreatCost: 3,
      number: '33',
      artist: 'Mitsuhiro Arita',
      rarity: 'Rare Holo GX',
      series: 'Sun & Moon',
      setCode: 'sm9',
      text: [
        'TAG TEAM rule: When your TAG TEAM is Knocked Out, your opponent takes 3 Prize cards.',
      ],
      attacks: [
        {
          cost: ['Lightning', 'Lightning', 'Lightning'],
          name: 'Full Blitz',
          text: 'Search your deck for up to 3 Lightning Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck.',
          damage: '150',
          convertedEnergyCost: 3,
        },
        {
          cost: ['Lightning', 'Lightning', 'Lightning'],
          name: 'Tag Bolt-GX',
          text: "If this Pokémon has at least 3 extra Lightning Energy attached to it (in addition to this attack's cost), this attack does 170 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
          damage: '200',
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
    {
      id: 'basep-1',
      name: 'Pikachu',
      nationalPokedexNumber: 25,
      imageUrl: 'https://images.pokemontcg.io/basep/1.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/basep/1_hires.png',
      types: ['Lightning'],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '60',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: '1',
      artist: 'Keiji Kinebuchi',
      series: 'Base',
      set: 'Wizards Black Star Promos',
      setCode: 'basep',
      attacks: [
        {
          cost: ['Colorless'],
          name: 'Growl',
          text: "If the Defending Pokémon attacks Pikachu during your opponent's next turn, any damage done by the attack is reduced by 10 (after applying Weakness and Resistance). (Benching either Pokémon ends this effect.)",
          damage: '',
          convertedEnergyCost: 1,
        },
        {
          cost: ['Lightning', 'Lightning'],
          name: 'Thundershock',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
          damage: '20',
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
      id: 'basep-4',
      name: 'Pikachu',
      nationalPokedexNumber: 25,
      imageUrl: 'https://images.pokemontcg.io/basep/4.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/basep/4_hires.png',
      types: ['Lightning'],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '50',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: '4',
      artist: 'Ken Sugimori',
      series: 'Base',
      set: 'Wizards Black Star Promos',
      setCode: 'basep',
      attacks: [
        {
          cost: ['Lightning'],
          name: 'Recharge',
          text: 'Search your deck for a Lightning Energy card and attach it to Pikachu. Shuffle your deck afterward.',
          damage: '',
          convertedEnergyCost: 1,
        },
        {
          cost: ['Lightning', 'Lightning', 'Lightning'],
          name: 'Thunderbolt',
          text: 'Discard all Energy cards attached to Pikachu in order to use this attack.',
          damage: '50',
          convertedEnergyCost: 3,
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
      id: 'xy6-20',
      name: 'Pikachu',
      nationalPokedexNumber: 25,
      imageUrl: 'https://images.pokemontcg.io/xy6/20.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/xy6/20_hires.png',
      types: ['Lightning'],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '60',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: '20',
      artist: 'Naoki Saito',
      rarity: 'Common',
      series: 'XY',
      set: 'Roaring Skies',
      setCode: 'xy6',
      attacks: [
        {
          cost: ['Colorless'],
          name: 'Tail Whip',
          text: "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.",
          damage: '',
          convertedEnergyCost: 1,
        },
        {
          cost: ['Lightning', 'Colorless'],
          name: 'Electro Ball',
          text: '',
          damage: '30',
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
      id: 'basep-24',
      name: "___________'s Pikachu",
      nationalPokedexNumber: 25,
      imageUrl: 'https://images.pokemontcg.io/basep/24.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/basep/24_hires.png',
      types: ['Lightning'],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '50',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: '24',
      artist: 'Kagemaru Himeno',
      series: 'Base',
      set: 'Wizards Black Star Promos',
      setCode: 'basep',
      attacks: [
        {
          cost: ['Lightning', 'Lightning'],
          name: 'Birthday Surprise',
          text: "If it's not your birthday, this attack does 30 damage. If it is your birthday, flip a coin. If heads, this attack does 30 damage plus 50 more damage; if tails, this attack does 30 damage.",
          damage: '30+',
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
      id: 'xy3-27',
      name: 'Pikachu',
      nationalPokedexNumber: 25,
      imageUrl: 'https://images.pokemontcg.io/xy3/27.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/xy3/27_hires.png',
      types: ['Lightning'],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '60',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: '27',
      artist: 'Sanosuke Sakuma',
      rarity: 'Common',
      series: 'XY',
      set: 'Furious Fists',
      setCode: 'xy3',
      attacks: [
        {
          cost: ['Lightning', 'Colorless'],
          name: 'Thunder Shock',
          text: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
          damage: '20',
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
      id: 'basep-25',
      name: 'Flying Pikachu',
      nationalPokedexNumber: 25,
      imageUrl: 'https://images.pokemontcg.io/basep/25.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/basep/25_hires.png',
      types: ['Lightning'],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: '25',
      artist: 'Toshinao Aoki',
      series: 'Base',
      set: 'Wizards Black Star Promos',
      setCode: 'basep',
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
          text: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Flying Pikachu; if tails, this attack does nothing (not even damage).",
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
      id: 'base6-86',
      name: 'Pikachu',
      nationalPokedexNumber: 25,
      imageUrl: 'https://images.pokemontcg.io/base6/86.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base6/86_hires.png',
      types: ['Lightning'],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '50',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: '86',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Base',
      set: 'Legendary Collection',
      setCode: 'base6',
      attacks: [
        {
          cost: ['Lightning', 'Lightning'],
          name: 'Spark',
          text: "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
          damage: '20',
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
      id: 'pop4-13',
      name: 'Pikachu',
      nationalPokedexNumber: 25,
      imageUrl: 'https://images.pokemontcg.io/pop4/13.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/pop4/13_hires.png',
      types: ['Lightning'],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '50',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: '13',
      artist: 'Kouki Saitou',
      rarity: 'Common',
      series: 'POP',
      set: 'POP Series 4',
      setCode: 'pop4',
      attacks: [
        {
          cost: ['Lightning', 'Colorless'],
          name: 'Spark',
          text: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
          damage: '20',
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
      id: 'smp-SM04',
      name: 'Pikachu',
      nationalPokedexNumber: 25,
      imageUrl: 'https://images.pokemontcg.io/smp/SM04.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/smp/SM04_hires.png',
      types: ['Lightning'],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '70',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: 'SM04',
      artist: 'kirisAki',
      rarity: 'Promo',
      series: 'Sun & Moon',
      setCode: 'smp',
      attacks: [
        {
          cost: ['Lightning'],
          name: 'Thunder Wave',
          text: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
          damage: '',
          convertedEnergyCost: 1,
        },
        {
          cost: ['Lightning', 'Colorless', 'Colorless'],
          name: 'Electro Ball',
          text: '',
          damage: '50',
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
    {
      id: 'ex2-72',
      name: 'Pikachu',
      nationalPokedexNumber: 25,
      imageUrl: 'https://images.pokemontcg.io/ex2/72.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/ex2/72_hires.png',
      types: ['Lightning'],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '50',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: '72',
      artist: 'Mitsuhiro Arita',
      rarity: 'Common',
      series: 'EX',
      set: 'Sandstorm',
      setCode: 'ex2',
      attacks: [
        {
          cost: ['Colorless'],
          name: 'Scratch',
          text: '',
          damage: '10',
          convertedEnergyCost: 1,
        },
        {
          cost: ['Lightning', 'Colorless', 'Colorless'],
          name: 'Pika Bolt',
          text: '',
          damage: '40',
          convertedEnergyCost: 3,
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
      id: 'hgss1-78',
      name: 'Pikachu',
      nationalPokedexNumber: 25,
      imageUrl: 'https://images.pokemontcg.io/hgss1/78.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/hgss1/78_hires.png',
      types: ['Lightning'],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '60',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: '78',
      artist: 'match',
      rarity: 'Common',
      series: 'HeartGold & SoulSilver',
      set: 'HeartGold & SoulSilver',
      setCode: 'hgss1',
      attacks: [
        {
          cost: ['Colorless'],
          name: 'Tail Slap',
          text: '',
          damage: '10',
          convertedEnergyCost: 1,
        },
        {
          cost: ['Lightning', 'Colorless'],
          name: 'Quick Attack',
          text: 'Flip a coin. If heads, this attack does 20 damage plus 10 more damage.',
          damage: '20+',
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
      id: 'bw7-50',
      name: 'Pikachu',
      nationalPokedexNumber: 25,
      imageUrl: 'https://images.pokemontcg.io/bw7/50.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/bw7/50_hires.png',
      types: ['Lightning'],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '60',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: '50',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Black & White',
      set: 'Boundaries Crossed',
      setCode: 'bw7',
      attacks: [
        {
          cost: ['Lightning'],
          name: 'Pika Punch',
          text: '',
          damage: '10',
          convertedEnergyCost: 1,
        },
        {
          cost: ['Lightning', 'Lightning', 'Colorless'],
          name: 'Double Voltage',
          text: 'Flip 2 coins. This attack does 40 damage times the number of heads.',
          damage: '40x',
          convertedEnergyCost: 3,
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
      id: 'basep-26',
      name: 'Pikachu',
      nationalPokedexNumber: 25,
      imageUrl: 'https://images.pokemontcg.io/basep/26.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/basep/26_hires.png',
      types: ['Lightning'],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: '26',
      artist: 'Gakuji Nomoto',
      series: 'Base',
      set: 'Wizards Black Star Promos',
      setCode: 'basep',
      attacks: [
        {
          cost: ['Colorless'],
          name: 'Scratch',
          text: '',
          damage: '10',
          convertedEnergyCost: 1,
        },
        {
          cost: ['Lightning', 'Lightning'],
          name: 'Thunderbolt',
          text: 'Discard all Energy cards attached to Pikachu.',
          damage: '40',
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
  ],
};
