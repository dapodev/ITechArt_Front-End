"use strict";

var _express = _interopRequireDefault(require("express"));

var _greetings = _interopRequireDefault(require("./handlers/greetings"));

var _constants = require("./config/constants");

var _routes = require("./config/routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.get(_routes.ROUTES.greetings, _greetings["default"]);
app.listen(_constants.PORT, function () {
  return console.log("Server started at port: ".concat(_constants.PORT));
});
//# sourceMappingURL=app.js.map