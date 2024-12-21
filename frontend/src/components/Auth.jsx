import React, { useState } from 'react';
import Firebase from '../Firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

// Destructure auth and googleProvider from the Firebase default export
const { auth, googleProvider } = Firebase;

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Email and Password Sign-In
  const signIn = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      if (userCredential.user) {
        navigate('/profile');
      }
    } catch (error) {
      console.error('Error signing in with email and password:', error.message);
    }
  };

  // Google Sign-In
  const signInGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      if (userCredential.user) {
        navigate('/profile');
      }
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-Background">
      <div className="w-full max-w-md p-8 space-y-6 bg-[#2e2e2e] rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-200">Sign Up</h2>
        <div>
          <label className="block text-sm font-medium text-gray-200">Email</label>
          <input
            type="email"
            placeholder="example@company.com"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-200">Password</label>
          <input
            type="password"
            placeholder="password"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={signInGoogle}
          className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:shadow-md transition duration-300 ease-in-out"
        >
          <FcGoogle className="mr-2 text-lg" /> Sign Up with Google
        </button>
        <button
          onClick={signIn}
          className="w-full px-4 py-2 bg-black text-white font-semibold rounded-lg hover:bg-white hover:text-[#1e1e1e] transition duration-300 ease-in-out"
        >
          Sign Up with Email
        </button>
      </div>
    </div>
  );
};

export default Auth;
