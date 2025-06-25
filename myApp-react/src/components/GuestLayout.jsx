import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

export default function GuestLayout() {
  const {token} = useStateContext();
  
  if(token){
    return <Navigate to="/"  />;
  }
  

  return (
    <div className="login-signup-form min-h-screen flex items-center justify-center bg-gray-100">
      <div className="form w-full max-w-md bg-white p-8 rounded shadow-md animate-fade-in">
        <Outlet />
      </div>
    </div>
  );
}
