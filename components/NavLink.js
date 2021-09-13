// components/NavLink.js

var Link = require('next/link').default;
var { useRouter } = require('next/router');
var { cloneElement, Children } = require('react');

function NavLink({ children, href, as, ...props }) {
  var { asPath } = useRouter();
  var child = Children.only(children);
  var childClassName = child.props.className;

  var className =
    (asPath === href || asPath === as)
      ? `${childClassName} active`.trim()
      : childClassName;

  return (
    <Link href={href} as={as} {...props}>
      {cloneElement(child, { className })}
    </Link>
  );
}

module.exports = NavLink;