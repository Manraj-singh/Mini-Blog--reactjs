import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-light">
      <ul id="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create-post">Create Post</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
