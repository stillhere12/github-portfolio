import { useQuery } from '@tanstack/react-query';
import { fetchGithubUser } from '../services/github.service';
export function useGithubUser(userName: string) {
  console.log(userName);

  // to prevent function calls we use () => {}
  // we passed the functions as reference......
  return useQuery({
    queryKey: ['github', 'user', userName],
    queryFn: () => {
      return fetchGithubUser(userName);
    },
    enabled: !!userName, // only fetch when userName is not empty this added by claude.........
  });
}
