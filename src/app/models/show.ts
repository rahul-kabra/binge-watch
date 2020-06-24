export interface Show {
    popularity: number;
    vote_count: number;
    poster_path: string;
    id: number;
    name: string;
    backdrop_path: string;
    original_language: string;
    title: string;
    genres: Genre[];
    vote_average: number;
    overview: string;
    first_air_date: string;
    last_air_date: string;
    type: string;
    status: string;
    seasons: Season[];
    homepage: string;
}

export interface Genre {
    id: number;
    name: string;
}

export interface Season {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
}