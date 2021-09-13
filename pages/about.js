// pages/about.js

var { chunkArray } = require('../lib/helpers');
var UserCard = require('../components/UserCard');

var users = require('../users');

function About() {
  var chunks = chunkArray(users, 4);

  return (
    <section className="py-5">
      <h4 className="mb-4 __text-yellow">Who We Are</h4>
      {chunks.map(chunk => (
        <div className="row">
          {chunk.map(user => (
            <div className="col-lg-3 col-sm-6 py-3">
              <UserCard user={user} />
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

module.exports = About;