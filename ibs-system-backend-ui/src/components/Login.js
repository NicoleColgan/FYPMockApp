import React from 'react'
import Image from "next/image";
import { signIn } from "next-auth/react";
("next-auth/client");


const Login = () => {
  return (
    <div>
        <Navbar />
        <div className='container'>
            <div className='h-12'>
                <button 
                onClick={signIn}
                className='rounded bg-blue-600 text-white px-6 py-2 font-semibold'>
                    Sign In
                </button>
            </div>
        </div>
    </div>
  )
};

export default Login