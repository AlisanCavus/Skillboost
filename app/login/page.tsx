'use client';
import { signIn } from 'next-auth/react';
import { FormEventHandler, useState } from 'react';
import { useRouter } from 'next/navigation';

const Signin = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const res = await signIn('credentials', {
      email: user.email,
      password: user.password,
      redirect: false,
    });

    if (!res?.error) {
      router.push('/welcome');
    }
  };

  return (
    <div className='flex justify-center align-center h-[calc(100dvh-7px)] w-full items-center'>
      <form
        onSubmit={handleSubmit}
        className='min-h-1/2 w-1/5 p-2 gap-8 flex flex-col align-center justify-center rounded-sm bg-brandSecondary'>
        <div className='form-control w-full max-w-xl'>
          <label htmlFor='email' className='label text-white'>
            {' '}
            Email{' '}
          </label>
          <input
            type='text'
            name='email'
            id='email'
            className='input input-bordered w-full max-w-xl rounded-sm'
            placeholder='email'
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className='form-control w-full max-w-xl'>
          <label htmlFor='password' className='label text-white'>
            {' '}
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            className='input input-bordered w-full max-w-xl rounded-sm'
            placeholder='password'
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div className='form-control'>
          <button
            className='flex justify-center py-2 px-6 bg-brandPrimary text-white rounded-sm font-bold'
            type='submit'>
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
