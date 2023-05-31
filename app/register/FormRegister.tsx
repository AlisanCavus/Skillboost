"use client";
import React from "react";
import { FormEventHandler, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { Token } from "@/types/generalTypes";
import { api } from "@/lib";
import { useToastStore } from "@/store/store";
import { IoMdCloseCircle } from "react-icons/io";

const FormRegister: React.FC<Token> = ({ token }) => {
  if (token) {
    redirect("/welcome");
  }
  const { isToast, change } = useToastStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await api.post("/anonymous/register", {
      email,
      plainPassword: password,
      termsAndConditionsAgreed: true,
    });
    if (response) {
      // Registration successful, log in the user
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      setLoading(false);
      if (result?.error) {
        // Login failed, display error message
        setError(result.error);
      } else {
        // Login successful, redirect to a protected page or dashboard
        router.push("/step1");
      }
    } else {
      // Registration failed, display error messag
      console.log(response);
      setError(response);
    }
  };

  return (
    <>
      <form
        onSubmit={handleRegister}
        className="min-h-1/2 align-center flex w-11/12 flex-col justify-center gap-8 rounded-sm bg-brandSecondary p-2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5"
      >
        <h2 className="text-center text-white"> Create a Free Account! </h2>
        <div className="form-control w-full max-w-xl">
          <label htmlFor="email" className="label text-white">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="input-bordered input w-full max-w-xl "
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-control w-full max-w-xl">
          <label htmlFor="email" className="label text-white">
            Password
          </label>
          <input
            pattern=".{8,}"
            id="password"
            type="password"
            placeholder="Password"
            className="input-bordered input w-full max-w-xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="label">
            <span className="label-text-alt text-xs text-white">
            *Password must be at least 8 characters.
            </span>
          </label>
        </div>
        <div className="form-control mt-4 w-full max-w-xl">
          {loading ? (
            <button
              className="btn-primary btn flex w-full max-w-xl gap-2 border-opacity-60 bg-brandPrimary bg-opacity-50 text-white opacity-100"
              type="submit"
              disabled
            >
              <span className="h-6 w-6 animate-spin rounded-full border-2 border-solid border-white border-t-transparent"></span>
              <span className="text-white">Processing</span>
            </button>
          ) : (
            <button
              className="btn-primary btn w-full max-w-xl text-white"
              type="submit"
            >
              Register
            </button>
          )}
        </div>
        <Link className=" text-brandPrimary" href="/login">
          Already have an account ?
        </Link>
      </form>
      {error && isToast && (
        <div className="toast-center toast w-96">
          <div className="alert alert-error">
            <div>
              <span>{error}</span>
            </div>
            <div className="flex-none">
              <button
                onClick={() => change(isToast)}
                className="btn-error btn-ghost btn"
              >
                <IoMdCloseCircle className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormRegister;
