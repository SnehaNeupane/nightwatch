// join files in one file, so we can use a single session for all tests
var extend = function (target) {
  var sources = [].slice.call(arguments, 1);
  sources.forEach(function (source) {
    for (var prop in source) {
      target[prop] = source[prop];
    }
  });
  return target;
};

// load before/after functions
var io = require("./io");
module.exports = extend(module.exports, io);

// tests
var login = require("./automation/login");
module.exports = extend(module.exports, login);

// var create_ws = require("./automation/create_ws");
// module.exports = extend(module.exports, create_ws);

var teams = require("./automation/teams");
module.exports = extend(module.exports, teams);

var user_invite = require("./automation/user_invite");
module.exports = extend(module.exports, user_invite);

// var assign_scope = require("./automation/assign_scope");
// module.exports = extend(module.exports, assign_scope);

// var ws_logout = require("./automation/ws_logout");
// module.exports = extend(module.exports, ws_logout);

// var logout = require("./automation/logout");
// module.exports = extend(module.exports, logout);
