import { useGithubRepos } from '../features/hooks/useGithubRepos';
import './RepoList.css';

interface RepoListProps {
  userName: string;
}

export default function RepoList({ userName }: RepoListProps) {
  const { data: repoData, isLoading, isError, error } = useGithubRepos(userName);

  if (isLoading) return <div className="loading">Loading repos...</div>;
  if (isError) return <div className="error">Error: {error.message}</div>;
  if (!repoData) return null;

  return (
    <div className="repo-list">
      <h3>Repositories</h3>
      <ul>
        {repoData.map((repo) => (
          <li key={repo.id} className="repo-item">
            <a className="repo-name" href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <div className="repo-details">
              {repo.description && <p className="repo-description">{repo.description}</p>}
              <span className="repo-stats">
                {repo.stargazers_count} stars | {repo.forks_count} forks
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
