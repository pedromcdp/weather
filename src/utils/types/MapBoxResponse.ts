export interface SearchResponse {
  attribution: string;
  features: Feature[];
  query: string[];
  type: string;
}

export interface Feature {
  center: number[];
  geometry: Geometry;
  id: string;
  place_name: string;
  place_type: string[];
  properties: Properties;
  relevance: number;
  text: string;
  type: string;
}

export interface Geometry {
  coordinates: number[];
  type: string;
}

export interface Properties {
  address: string;
  category: string;
  context: Context[];
  landmark: boolean;
  match_type: string;
  maki: string;
  text: string;
}

export interface Context {
  id: string;
  short_code: string;
  text: string;
  wikidata: string;
}
