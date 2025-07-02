import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider';

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassowrd] = useState("");


  const {setUser, setToken} = useStateContext();

  const onSubmit = (event) => {
    event.preventDefault();

    const payload = {
      name: name,
      email: email,
      password: password,
      password_confirmation: confirmationPassword,
    };

    console.log(payload); 

    axiosClient.post('/signup', payload)
      .then( (response) => {
        setUser(response.data.user)
        setToken(response.data.token)
        // console.log("Data posted");
        

      })
      .catch( (err) => {
        console.log(err);
        
        const response = err.response;
        if(response && response.status === 422){
          console.log(response.data.errors);
          
        }
      })
  };

  return (
    
      <div className="form w-full max-w-md bg-white/90 backdrop-blur-md p-8 rounded shadow-lg animate-fade-in-down">
        <form onSubmit={onSubmit}>
          <h1 className="title text-2xl font-bold mb-6 text-center text-gray-800">
            Signup for Free
          </h1>

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Repeat Password"
            value={confirmationPassword}
            onChange={(e) => setConfirmationPassowrd(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Signup
          </button>

          <p className="message text-sm mt-4 text-center text-gray-700">
            Already Registered?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    
  );
}
