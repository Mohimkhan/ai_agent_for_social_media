import { headers } from "next/headers";

export async function fetchGithubRepos() {
  const host = headers().get("host"); // Get the current domain
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(`${protocol}://${host}/api/github/repos`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch repositories");
  }

  const { repos } = await res.json();

  return repos;
}
