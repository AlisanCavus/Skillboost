"use client";
import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { UnAuthLayout } from "../components";

const Signin = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const res = await signIn("credentials", {
      email: user.email,
      password: user.password,
      redirect: false,
    });

    if (!res?.error) {
      router.push("/welcome");
    }
  };

  return (
    <UnAuthLayout
      companyName="Linkus"
      termsLink="http://google.com"
      logoImage="/linkusLogo.svg"
      privacyLink="http://google.com"
      cookieLink="http://google.com"
      dataConsenseLink="http://google.com"
    >
      <form
        onSubmit={handleSubmit}
        className="min-h-1/2 align-center flex w-11/12 flex-col justify-center gap-8 rounded-sm bg-brandSecondary p-2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5"
      >
        <div className="form-control w-full max-w-xl">
          <label htmlFor="email" className="label text-white">
            {" "}
            Email{" "}
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="input-bordered input w-full max-w-xl rounded-sm"
            placeholder="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="form-control w-full max-w-xl">
          <label htmlFor="password" className="label text-white">
            {" "}
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="input-bordered input w-full max-w-xl rounded-sm"
            placeholder="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div className="form-control">
          <button
            className="flex justify-center rounded-sm bg-brandPrimary px-6 py-2 font-bold text-white"
            type="submit"
          >
            Sign in
          </button>
        </div>
      </form>
    </UnAuthLayout>
  );
};

export default Signin;
