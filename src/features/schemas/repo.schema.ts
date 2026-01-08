import * as z from 'zod';

const GithubRepoSchema = z.object({
  id: z.number(),
  name: z.string(),
  full_name: z.string(),
  html_url: z.string(),
  description: z.string().nullable(),
  stargazers_count: z.number().optional().default(0),
  forks_count: z.number().optional().default(0),
  open_issues_count: z.number().optional().default(0),
  language: z.string().nullable(),
  private: z.boolean(),
  fork: z.boolean(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  pushed_at: z.string().nullable().optional(),
});

export const GithubReposSchema = z.array(GithubRepoSchema);
export type GithubRepo = z.infer<typeof GithubRepoSchema>;
export type GithubRepos = z.infer<typeof GithubReposSchema>;
