export type PokemonCollection = {
  cards: Pokemon[];
};

export type Pokemon = {
  id: string;
  name: string;
  nationalPokedexNumber: number;
  imageUrl: string;
  imageUrlHiRes: string;
  types: string[];
  supertype: string;
  subtype: string;
  hp: string;
  retreatCost: string[];
  convertedRetreatCost: number;
  number: string;
  artist: string;
  rarity?: string;
  series: string;
  set?: string;
  setCode: string;
  attacks: Attack[];
  resistances?: Resistance[];
  weaknesses?: Weakness[];
  ability?: Ability;
  text?: string[];
};

export type Attack = {
  cost: string[];
  name: string;
  text: string;
  damage: string;
  convertedEnergyCost: number;
};

export type Resistance = {
  type: string;
  value: string;
};

export type Weakness = {
  type: string;
  value: string;
};

export type Ability = {
  name: string;
  text: string;
  type: string;
};
