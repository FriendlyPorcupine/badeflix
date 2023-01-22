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
