'use client';
import { signIn, signOut } from "next-auth/react";
import { useSession } from 'next-auth/react';
import Loader from "./components/Loader";


export default function Home() {
  const { data: session, status } = useSession();
  console.log(session);
  if (status === 'loading') {
    return <Loader />;
  }

  return (
   <div>
     CV Polisher
     <button onClick={() => signIn()}>Signin</button>

      {session && (
        <div>
          <h1> Welcome {session.user.token}</h1>
          <button onClick={() => signOut()}>Signout</button>
        </div>
      )}
   </div>
  )
}
