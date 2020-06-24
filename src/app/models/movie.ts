export interface Movie {
    popularity: number;
    vote_count: number;
    video: boolean;
    poster_path: string;
    id: number;
    adult: boolean;
    backdrop_path: string;
    original_language: string;
    title: string;
    original_title: string;
    genres: Genre[];
    vote_average: number;
    overview: string;
    release_date: string;
    tagline: string;
    runtime: number;
    homepage: string;
    revenue: any;
}

export interface Genre {
    id: number;
    name: string;
}