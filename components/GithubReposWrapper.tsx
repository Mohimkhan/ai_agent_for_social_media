"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const GithubReposWrapper = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");

  const handleFetchRepos = () => {
    if (username.trim()) {
      router.push(`?username=${encodeURIComponent(username)}`); // Update the URL
    }
    // reset the field
    setUsername("");
  };

  return (
    <div className="flex justify-start items-center flex-col flex-wrap sm:flex-row gap-2">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        className="border-dashed border-2 border-slate-600 caret-primary-color outline-none
         p-2 rounded"
      />
      <button
        onClick={handleFetchRepos}
        className="bg-blue-500 text-white p-2 rounded hover:scale-95 hover:rounded-sm cursor-pointer"
      >
        Fetch Repos
      </button>
    </div>
  );
};
export default GithubReposWrapper;
