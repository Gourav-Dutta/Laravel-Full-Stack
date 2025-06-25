import React from 'react';
import { Link } from "react-router-dom";

export default function Login() {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Hello");
  };

  return (
      <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-md">
        <form onSubmit={onSubmit} className="space-y-5">
          <h1 className="text-xl font-semibold text-center text-gray-800">
            Login to your account
          </h1>

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-600">
            Not Registered?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Create an account
            </Link>
          </p>
        </form>
      </div>
    
  );
}
