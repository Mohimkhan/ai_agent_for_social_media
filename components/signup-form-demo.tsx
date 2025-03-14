"use client";
import React from "react";
import { appName } from "@/constants";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Image from "next/image";
import { signInWithGithub } from "@/app/actions/user.action";

export default function SignupFormDemo() {
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="flex items-center gap-1 font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to <TypewriterEffectSmooth words={[{ text: `${appName}` }]} />
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to {appName} so that we know who you are🤔
      </p>

      <form className="my-8">
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            onClick={async () => {
              await signInWithGithub({});
            }}
          >
            <Image
              src="/icons/githubIcon.png"
              alt="github icon"
              width={20}
              height={20}
            ></Image>
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
            <Image
              src="/icons/googleIcon.png"
              alt="google icon"
              width={16}
              height={16}
            ></Image>
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-primary-color to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-primary-color to-transparent" />
    </>
  );
};
