import { GithubReposSchema } from '../schemas/repo.schema';
import { GithubUserSchema } from '../schemas/user.schema';
const BASE_URL = `https://api.github.com`;
export const fetchGithubUser = async (userName: string) => {
  try {
    const res = await fetch(`${BASE_URL}/users/${userName}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    const dataofUser = await res.json();
    const validatedData = GithubUserSchema.parse(dataofUser);
    return validatedData;
    // returning validated data from zod validation....
    // it is a promise....
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const fetchGithubRepos = async (userName: string) => {
  try {
    const res = await fetch(`${BASE_URL}/users/${userName}/repos`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    const dataofRepos = await res.json();
    // mistake corrected by claude........
    const validatedRepos = GithubReposSchema.parse(dataofRepos);
    return validatedRepos;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
