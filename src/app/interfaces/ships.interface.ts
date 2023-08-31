export interface Starships {
    count: number;
    next: string;
    previous: null;
    results: StarshipList[];
}

export interface StarshipList {
    model:                  string;
    name:                   string;
    MGLT:                   string;
    cargo_capacity:         string;
    consumables:            string;
    cost_in_credits:        string;
    created:                Date;
    crew:                   string;
    edited:                 Date;
    films:                  string[];
    hyperdrive_rating:      string;
    length:                 string;
    manufacturer:           string;
    img:                    string;
    max_atmosphering_speed: string;
    passengers:             string;
    pilots:                 string[];
    starship_class:         string;
    url:                    string;
}