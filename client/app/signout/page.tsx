'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const SignOutPage = () => {
  const router = useRouter();

  const signOut = async () => {
    try {
      await axios.get('http://localhost:3000/v1/user/signout', {
        withCredentials: true,
      });
<<<<<<< HEAD
      localStorage.setItem('authenticated', '0');
=======
>>>>>>> 4e1922e47a5bf0e7a7483f4243d9d7df1759a66d
    } finally {
      router.push('/');
    }
  };

  useEffect(() => {
    signOut();
  }, []);

  return <>Signing out...</>;
};

export default SignOutPage;
