import { useQuery } from '@tanstack/react-query';
import { getSearchResutls } from '../utils/lib/apiCalls';

export function useGetSearch(query: string | null) {
  return useQuery(['search', query], () => getSearchResutls(query), {
    enabled: query != '',
  });
}
