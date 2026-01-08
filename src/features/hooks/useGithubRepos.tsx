import { useQuery } from '@tanstack/react-query';
import { fetchGithubRepos } from '../services/github.service';
export function useGithubRepos(userName: string) {
  // what it does is that we create reference and when some event happens
  // callback runs that is inner function executes
  // to prevent direct execution we use this way.......
  return useQuery({
    queryKey: ['github', 'repos', userName],
    queryFn: () => {
      return fetchGithubRepos(userName);
    },
    enabled: !!userName,
  });
}
