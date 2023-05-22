"use client";
import React from "react";
import { signOut } from "next-auth/react";

export const Header = () => {
  return (
    <div className="flex justify-between w-full">
      <div>Header</div>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};
