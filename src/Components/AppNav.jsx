import { Link } from "react-router-dom";

function AppNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-4">
      <div className="container-fluid">
        <Link className="nav-link fs-5" to="/">
          Recipe Display
        </Link>
        <Link className="nav-link fs-5" to="/recipeinput">
          Recipe Input
        </Link>
      </div>
    </nav>
  );
}

export default AppNav;
