import { Outlet, Navigate, Link } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

export default function DefaultLayout() {
   
  const {user, token} = useStateContext();
  
  if(!token){
    return <Navigate to="/login"/>
  }
  const onLogout = (e) => {
    e.preventDefault();
    alert("Are you sure you want to Log-out");
  };

  return (
    <div id="defaultLayout" className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4 flex flex-col space-y-4">
        <Link to="/dashboard" className="hover:bg-gray-700 p-2 rounded">
          Dashboard
        </Link>
        <Link to="/users" className="hover:bg-gray-700 p-2 rounded">
          Users
        </Link>
      </aside>

      <div className="content flex-1 flex flex-col">
        <header className="flex justify-between items-center bg-white px-6 py-4 shadow">
          <div className="text-lg font-semibold">Header</div>
          <div className="flex items-center gap-2 text-gray-700">
            {user.name}
            <a
              href="#"
              onClick={onLogout}
              className="btn-logout text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
              name="logOut"
            >
              Logout
            </a>
          </div>
        </header>

        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
