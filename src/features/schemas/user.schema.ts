import * as z from "zod";
export const GithubUserSchema = z.object({
  id: z.number(),
  login: z.string(),
  avatar_url: z.string().url(),
  name: z.string().nullable().optional(),
  bio: z.string().nullable().optional(),
  followers: z.number().optional().default(0),
  following: z.number().optional().default(0),
  public_repos: z.number().optional().default(0),
  location: z.string().nullable().optional(),
  html_url: z.string().url().optional(),
});
export type GithubUser = z.infer<typeof GithubUserSchema>;
