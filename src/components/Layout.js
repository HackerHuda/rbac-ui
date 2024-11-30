import { Link, Outlet } from "react-router-dom";

const Layout = () => (
  <div className="flex h-screen">
    <aside className="w-1/5 bg-gray-800 text-white p-4">
      <nav>
        <Link to="/users" className="block py-2">Users</Link>
        <Link to="/roles" className="block py-2">Roles</Link>
      </nav>
    </aside>
    <main className="flex-1 p-6">
      <Outlet />
    </main>
  </div>
);

export default Layout;
