import { headers } from "next/headers";

export async function fetchGithubRepos(username: string) {
  const host = headers().get("host"); // Get the current domain
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(`${protocol}://${host}/api/github/repos`, {
    cache: "no-store",
    method: "POST",
    body: JSON.stringify({ username }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch repositories");
  }

  const { repos } = await res.json();

  return repos;
}
