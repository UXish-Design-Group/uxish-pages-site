// components/Footer.js

var Link = require('next/link').default;

function Footer() {
  var currYear = new Date().getFullYear();
  return (
    <div className="container">
      <footer className="py-5 border-top">
        <div className="d-flex flex-wrap align-items-center">
          <div className="me-auto px-2 text-muted">
            &copy; {currYear} UXish Design Group
          </div>
          <div className="nav">
            <Link href="https://github.com/UXish-Design-Group">
              <a className="nav-link px-2 text-muted __onhover-text-yellow">
                <i className="bi bi-github"></i>
              </a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

module.exports = Footer;