import { useGithubUser } from '../features/hooks/useGithubUser';
import './Profile.css';
import RepoList from './RepoList';

interface ProfileProps {
  search: string;
  showRepos: boolean;
  handleShowing: (show: boolean) => void;
}

const Profile = ({ search, showRepos, handleShowing }: ProfileProps) => {
  const { data: user, isLoading, isError, error } = useGithubUser(search);

  if (isLoading) return <div className="loading">Loading...</div>;
  if (isError) return <div className="error">Error: {error.message}</div>;
  if (!user) return null;
  function handleShowingRepos(showRepos: boolean) {
    if (showRepos) {
      handleShowing(false);
    }
  }
  return (
    <div className="profile">
      <div className="profile-header">
        <img className="profile-avatar" src={user.avatar_url} alt={user.login} />
        <div className="profile-info">
          <h2>{user.name || user.login}</h2>
          {user.bio && <p className="profile-bio">{user.bio}</p>}
          {user.location && <p className="profile-location">{user.location}</p>}
        </div>
      </div>
      <div className="profile-stats">
        <span>Followers: {user.followers}</span>
        <span>Following: {user.following}</span>
        <span>Repos: {user.public_repos}</span>
      </div>
      <div className="profile-actions">
        {user.html_url && (
          <a
            className="profile-link"
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        )}
        <button className="profile-toggle" onClick={() => handleShowing(!showRepos)}>
          {showRepos ? 'Hide Repos' : 'Show Repos'}
        </button>
      </div>
      {showRepos && <RepoList userName={search} />}
    </div>
  );
};

export default Profile;
