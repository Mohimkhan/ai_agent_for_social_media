import { fetchGithubRepos } from "@/lib/utils/github";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  private: boolean;
};

export default async function GithubRepos() {
  const repos: Repo[] = await fetchGithubRepos();

  return (
    <div>
      <h1>My GitHub Repositories</h1>
      <ul className="mt-4 overflow-y-scroll h-[220px] w-full max-w-[410px]">
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="border-2 border-slate-600 bg-black text-[#74b9ff] mb-2 w-full max-w-96 rounded-md py-4 px-4 cursor-pointer"
          >
            <a
              href={repo.html_url}
              target="_blank"
              className="hover:underline text-sm"
              rel="noopener noreferrer"
            >
              {repo.name} {repo.private ? "(Private)" : "(Public)"}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
