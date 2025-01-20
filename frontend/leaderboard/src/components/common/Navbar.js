import { Link } from "react-router-dom";
import { Users, Award, Clock } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-accent-100 text-bg-100 p-4 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <h1 className="text-2xl font-bold">Leaderboard App</h1>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link to="/" className="flex items-center gap-2 hover:text-bg-200">
            <Users size={20} />
            <span>Users</span>
          </Link>
          <Link
            to="/leaderboard"
            className="flex items-center gap-2 hover:text-bg-200"
          >
            <Award size={20} />
            <span>Leaderboard</span>
          </Link>
          <Link
            to="/claim"
            className="flex items-center gap-2 hover:text-bg-200"
          >
            <span>Claim Points</span>
          </Link>
          <Link
            to="/history"
            className="flex items-center gap-2 hover:text-bg-200"
          >
            <Clock size={20} />
            <span>History</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
