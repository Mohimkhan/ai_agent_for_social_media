import { Octokit } from "@octokit/rest";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

  // if (!GITHUB_ACCESS_TOKEN) {
  //   return NextResponse.json(
  //     { error: "GitHub token is missing" },
  //     { status: 404 }
  //   );
  // }

  const { username } = await request.json();

  const octokit = new Octokit();

  try {
    const { data } = await octokit.rest.repos.listForUser({
      username,
      per_page: 10, // Limit results per page
    });
    return NextResponse.json({ repos: data }, { status: 200 });
  } catch (error: unknown) {
    let errorMessage = "An unknown error occurred";
    let statusCode = 500;

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    if (typeof error === "object" && error !== null && "status" in error) {
      statusCode = (error as { status: number }).status;
    }

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}
