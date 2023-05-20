'use client';
import { signIn } from 'next-auth/react';

export default function Home() {

  return (
    <div className='flex gap-8 justify-around items-center w-full py-2'>
      <h1>CV Polisher</h1>
      <button
        className='flex py-2 px-6 bg-brandPrimary text-white rounded-sm font-bold'
        onClick={() => signIn()}>
        Sign in
      </button>
    </div>
  );
}
