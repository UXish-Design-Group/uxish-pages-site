// components/UserCard.js

var Link = require('next/link').default;

function UserCard({ user }) {
  return (
    <div className="user-card">
      <div className="card border-0">
        <div className={user.filterUrl ? "has-filter" : ""}>
          {user.filterUrl &&
            <img src={user.filterUrl} className="img-filter" alt="" />
          }
          <img src={user.imageUrl} className="card-img-top" alt="" />
        </div>
        <div className="card-body px-0">
          <h5 className="card-title">{user.name}</h5>
          <h6 className="card-subtitle text-muted">{user.tag}</h6>
          <p className="card-text">{user.shortdesc}</p>
          {user.links.map(link => (
            <Link href={link.href}>
              <a className="card-link text-muted __onhover-text-yellow">
                <i className={`bi bi-${link.icon}`}></i>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

module.exports = UserCard;