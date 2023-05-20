'use client';
import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import Loader from '../components/Loader';
import getCurrentUser from '../../lib/getCurrentUser';
import { useQuery } from '@tanstack/react-query';

const Welcome = () => {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login');
    },
  });

  const handleSignOut = () => {
    signOut();
    router.push('/');
  }

  if (session){
    const currentUser = getCurrentUser(session);
  }
  
  // const { data: user } = useQuery({
  //   enabled: !!session,
  //   queryKey: ['currentUser'],
  //   queryFn: () => getCurrentUser(session!),
  // });
  
  

  if (status === 'loading' || !session) {
    return <Loader />;
  }

  return (
    <div className='flex gap-2'>
      <p> welcome to client protected page </p> 
      <div className=' w-1/2'>
      {session?.user?.iat} 
      </div>  
      <button onClick={()=>{handleSignOut()}}> Sign Out</button>
    </div>
  );
};

export default Welcome;
