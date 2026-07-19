import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };


  return (
    <nav className="bg-slate-900 text-white shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">


        <h1 className="text-2xl font-bold text-cyan-400">
          AI Scam Detector
        </h1>


        <div className="flex gap-6">


          <Link to="/dashboard">
            Home
          </Link>


          <Link to="/history">
            History
          </Link>


          <Link to="/awareness">
            Awareness
          </Link>


          <button
            onClick={logout}
            className="bg-red-500 px-4 py-2 rounded-lg"
          >
            Logout
          </button>


        </div>


      </div>

    </nav>
  );
}

export default Navbar;