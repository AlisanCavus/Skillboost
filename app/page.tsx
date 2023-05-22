"use client";
import { signIn } from "next-auth/react";
import { TopBar } from "./components";

export default function Home() {
  return (
    <>
      <TopBar />
      <div className="flex w-full items-center justify-around gap-8 py-2">
        <h1>CV Polisher</h1>
        <button
          className="flex rounded-sm bg-brandPrimary px-6 py-2 font-bold text-white"
          onClick={() => signIn()}
        >
          Sign in
        </button>
      </div>
    </>
  );
}
