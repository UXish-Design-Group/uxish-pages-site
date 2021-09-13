// components/Navbar.js

var NavLink = require('./NavLink');

function Navbar() {
  return (
    <div className="container">
      <div className="navbar py-3 navbar-dark">
        <a href="/" className="navbar-brand me-auto">
          UXish Design Group
        </a>
        <ul className="navbar-nav flex-row">
          <li className="nav-item active">
            <NavLink href="/">
              <a className="nav-link px-2">Home</a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="/about">
              <a className="nav-link px-2">About</a>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

module.exports = Navbar;