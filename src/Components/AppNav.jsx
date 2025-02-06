import { Link } from "react-router-dom";

function AppNav() {
  return (
    <nav>
      <Link to="/">Recipe Display</Link>
      <Link to="/recipeinput">Recipe Input</Link>
    </nav>
  );
}

export default AppNav;
