// components/Layout.js

var Navbar = require('./Navbar');
var Footer = require('./Footer');

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="container">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}

module.exports = Layout;