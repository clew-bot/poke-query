interface name {
  name: string;
  language: language;
}

interface language {
  id: number;
  name: string;
  official: boolean;
  iso639: string;
  iso3166: string;
  names: name[];
}

interface FlavorText {
  flavor_text: string;
  language: language;
  version: Version;
}

interface Version {
  id: number;
  name: string;
  names: name[];
  version_group: VersionGroup;
}

interface VersionGroup {
  id: number;
  name: string;
  order: number;
}


export interface ExactPokemon {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: {
    id: number;
    name: string;
    formula: string;
    descriptions: {
      description: string;
      language: language;
    }[];
    levels: {
      level: number;
      experience: number;
    }[];
    pokemon_species: {
      name: string;
      url: string;
    }[];
  };
   flavor_text_entries: FlavorText[];
}

export interface AbilityPokemon {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: {
    id: number;
    name: string;
    abilities: {
      name: string;
      url: string;
    }[];
    names: {
      name: string;
      language: language;
    }[];
    main_region: {
      name: string;
      url: string;
    };
    moves: {
      name: string;
      url: string;
    }[];
    pokemon_species: {
      name: string;
      url: string;
    }[];
    types: {
      name: string;
      url: string;
    }[];
    version_groups: {
      name: string;
      url: string;
    }[];
  };
  names: {
    name: string;
    language: language;
  }[];
  effect_entries: {
    effect: string;
    short_effect: string;
    language: language;
  }[];
  effect_changes: {
    version_group: {
      name: string;
      url: string;
    };
    effect_entries: {
      effect: string;
      language: language;
    }[];
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: language;
    version_group: {
      name: string;
      url: string;
    };
  }[];
  pokemon: {
    is_hidden: boolean;
    slot: number;
    pokemon: {
      name: string;
      url: string;
    };
  }[];
}
