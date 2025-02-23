import GithubRepos from "@/components/GithubRepos";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<p>Loading github repos...</p>}>
        <GithubRepos />
      </Suspense>
    </div>
  );
}
