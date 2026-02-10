import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-black rounded-xl ">
      {/* Logo at the start */}
      <Link to="/" className="shrink-0">
        <img src={logo} alt="logo" className="h-15 rounded-3xl w-16" />
      </Link>

      {/* Links centered */}
      <div className="flex justify-center flex-1 gap-8">
        <Link to="/" className="hover:text-amber-700">Home</Link>
        <Link to="/Todos" className="hover:text-amber-700">Todos</Link>
        <Link to="/Done" className="hover:text-amber-700">Done</Link>
        <Link to="/about" className="hover:text-amber-700">About</Link>
        <Link to="/Login" className="hover:text-amber-700">Login</Link> 
        <Link to="/Season" className="hover:text-amber-700">Season</Link> 
      </div>

      {/* Optional: add empty div to balance spacing on right */}
      <div className="shrink-0 w-10"></div>
    </div>
  );
};

export default Header;
