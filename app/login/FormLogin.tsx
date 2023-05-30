"use client";
import React, { useRef } from "react";
import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";
import { useRouter, redirect } from "next/navigation";
import Link from "next/link";
import { Token } from "@/types/generalTypes";
import { useToastStore } from "@/store/store";
import {IoMdCloseCircle} from 'react-icons/io'
const FormLogin: React.FC<Token> = ({ token }) => {
  if (token) {
    redirect("/welcome");
  }
  const { isToast, change } = useToastStore();
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    setLoading(true);
    event.preventDefault();

    const res = await signIn("credentials", {
      email: user.email,
      password: user.password,
      redirect: false,
    });

    if (!res?.error && res?.ok) {
      router.push("/step1");
      setLoading(false);
    }

    if (res?.error || res?.status === 401) {
      change(isToast);
      setLoading(false);
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="min-h-1/2 align-center flex w-11/12 flex-col justify-center gap-8 rounded-sm bg-brandSecondary p-2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5"
      >
        <h2 className="text-center text-white"> Welcome Back! </h2>

        <div className="form-control w-full max-w-xl">
          <label htmlFor="email" className="label text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="input-bordered input w-full max-w-xl"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="form-control w-full max-w-xl">
          <label htmlFor="password" className="label text-white">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className=" input input-bordered w-full max-w-xl"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div className="form-control w-full max-w-xl mt-10">
          {loading ? (
            <button
              className="btn btn-primary w-full max-w-xl text-white disabled"
              type="submit"
              disabled
            >
              <span className="h-6 w-6 animate-spin rounded-full border-2 border-solid border-white border-t-transparent"></span>
              Processing
            </button>
          ) : (
            <button
              className="btn btn-primary w-full max-w-xl text-white"
              type="submit"
            >
              Sign in
            </button>
          )}
        </div>
        <Link className=" text-brandPrimary" href="/register">
          New to Linkus ?
        </Link>
      </form>
      {error && isToast && (
        <div className="toast-center toast w-96">
          <div className="alert alert-error">
            <div>
              <span>{error}</span>
            </div>
            <div className="flex-none">
              <button onClick={()=> change(isToast)} className="btn-error btn-ghost btn">
                <IoMdCloseCircle className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormLogin;
