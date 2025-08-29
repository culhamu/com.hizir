import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/userSlice.js";

export default function Navbar() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <nav className="bg-primary text-white px-4 py-3 flex justify-between items-center">
      <Link to="/" className="font-bold text-lg">Expertiz</Link>
      <div className="space-x-4">
        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={() => dispatch(logout())} className="bg-red-500 px-3 py-1 rounded">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
