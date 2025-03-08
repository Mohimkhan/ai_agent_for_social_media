import { signIn } from "@/lib/auth";

interface signInParams {
  redirectTo?: string | undefined;
}

export const signInWithGoogle = async (params: signInParams) => {
  await signIn("google", { ...params });
};

export const signInWithGithub = async (params: signInParams) => {
  await signIn("github", { ...params });
};
