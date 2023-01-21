"use client"

import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import axios from "axios";

const SignOutPage = () => {
    const router = useRouter();

    const signOut = async () => {
        try {
            await axios.get('http://localhost:3000/v1/user/signout', {
              withCredentials: true,
            });
          } finally  {
            router.push('/');
          }
    }

    useEffect(() => {
        signOut();
    }, []);

    return <>Signing out...</>;
}

export default SignOutPage;