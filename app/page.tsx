import GithubRepos from "@/components/GithubRepos";
import GithubReposWrapper from "@/components/GithubReposWrapper";
import { Suspense } from "react";

export default function Home({
  searchParams,
}: {
  searchParams: { username?: string };
}) {
  const username = searchParams.username || ""; // Get username from URL

  return (
    <div>
      <GithubReposWrapper />
      <br />
      <Suspense fallback={<p>Loading github repos of {username}...</p>}>
        {username && <GithubRepos username={username} />}
      </Suspense>
    </div>
  );
}
