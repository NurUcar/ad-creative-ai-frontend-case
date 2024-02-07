type IGenericFetchStatus = "success" | "error" | "idle" | "loading";

export interface IGenericApiResponse {
  status: boolean;
  message: string;
  error: any;
  errors: {
    [key: string]: string[];
  };
  data: any;
}

export type IGenericResponse = IGenericApiResponse;

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
export interface IRickAndMorty {
  id: number;
  name: string;
  status: "alive" | "dead" | "unknown";
  species: string;
  type: string;
  gender: "female" | "male" | "genderless" | "unknown";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
export interface IGetRickAndMortyCharactersResponse extends IGenericResponse {
  info: Info;
  results: IRickAndMorty[];
}
