"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../../config/constants");

var greetings = function greetings(request, response) {
  var name = request.query.name;

  if (name) {
    var htmlResponse = "\n        <h1>\n          Hello, ".concat(name, "!\n        </h1>\n      ");
    response.status(_constants.STATUS_CODES.OK);
    response.set('Content-Type', 'text/html');
    response.send(htmlResponse);
  } else {
    response.status(_constants.STATUS_CODES.INVALID_REQUEST);
    response.set('Content-Type', 'application/json');
    response.send(JSON.stringify({
      errorMessage: "Error ".concat(_constants.STATUS_CODES.INVALID_REQUEST, ": query parameter 'name' expected."),
      errorCode: _constants.STATUS_CODES.INVALID_REQUEST
    }));
  }
};

var _default = greetings;
exports["default"] = _default;
//# sourceMappingURL=index.js.map