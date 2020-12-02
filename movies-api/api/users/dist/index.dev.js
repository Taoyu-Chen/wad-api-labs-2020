"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userModel = _interopRequireDefault(require("./userModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router(); // eslint-disable-line
// Get all users


router.get('/', function (req, res) {
  _userModel["default"].find().then(function (users) {
    return res.status(200).json(users);
  });
}); // register

router.post('/', function (req, res, next) {
  _userModel["default"].create(req.body).then(function (user) {
    return res.status(200).json({
      success: true,
      token: "FakeTokenForNow"
    });
  })["catch"](next);
}); // Update a user

router.put('/:id', function (req, res) {
  if (req.body._id) delete req.body._id;

  _userModel["default"].update({
    _id: req.params.id
  }, req.body, {
    upsert: false
  }).then(function (user) {
    return res.json(200, user);
  });
});
var _default = router;
exports["default"] = _default;