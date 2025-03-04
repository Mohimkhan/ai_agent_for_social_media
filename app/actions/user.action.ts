import { signIn } from "next-auth/react";

interface signInParams {
  redirectTo: string | undefined;
}

export const signInWithGoogle = async (params: signInParams) => {
  await signIn("google", { ...params });
};

export const signInWithGithub = async (params: signInParams) => {
  await signIn("github", { ...params });
};
