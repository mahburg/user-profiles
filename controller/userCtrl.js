var users = [{
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '7',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];


var exports = module.exports = {};

exports.login = function (req, res, next) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].name == req.body.name && req.body.password == users[i].password) {
      req.session.currentUser = users[i];
      return res.status(200).json({
        userFound: true
      });
    }
  }
  res.status(401).json({
    userFound: false
  });
}
