import axios from 'axios';
import i18next from 'i18next';
import { MapBox_API_URL } from '../constants';
import type { SearchResponse } from '../types/MapBoxResponse';

const { VITE_MAPBPOX_TOKEN } = import.meta.env;

export const getSearchResutls = async (
  query: string | null,
): Promise<SearchResponse> => {
  const response = await axios.get(
    `${query}.json?proximity=-73.990593%2C40.740121&types=place%2Cpostcode%2Caddress%2Clocality&language=${i18next.language}&autocomplete=true&access_token=${VITE_MAPBPOX_TOKEN}`,
    { baseURL: MapBox_API_URL },
  );
  return response.data;
};
