'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const Welcome = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin?callbackUrl=/protected/client/welcome');
    },
  });
  return <div>welcome to client protected page {session?.user?.email} </div>;
};

export default Welcome;
