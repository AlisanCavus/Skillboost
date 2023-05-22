"use client";
import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";
import { useRouter, redirect } from "next/navigation";
import Link from "next/link";
import { Token } from "@/types/generalTypes";

const FormLogin: React.FC<Token> = ({ token }) => {
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
      // redirect: false,
    });

    if (!res?.error) {
      setLoading(false);
      router.push("/welcome");
    }

    if (res?.error) {
      setLoading(false);
      setError(res.error);
    }
  };

  if (token) {
    redirect("/welcome");
  }

  return (
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
          type="text"
          name="email"
          id="email"
          className="input-bordered input w-full max-w-xl rounded-sm"
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
          className="input-bordered input w-full max-w-xl rounded-sm"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <div className="form-control w-full max-w-xl">
        {error && (
          <div className="form-control w-full max-w-xl">
            <div className="text-red-500">{error}</div>
          </div>
        )}
        {loading ? (
          <button
            className="flex justify-center items-center rounded-sm bg-brandPrimary px-6 py-3 font-bold text-white gap-8 disabled:opacity-60"
            type="submit"
            disabled
          >
            <span className="h-6 w-6 animate-spin  rounded-full border-2 border-solid border-white border-t-transparent"></span>
            Processing
          </button>
        ) : (
          <button
            className="flex justify-center rounded-sm bg-brandPrimary px-6 py-3 font-bold text-white"
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
  );
};

export default FormLogin;
