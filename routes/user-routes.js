const router = require("express").Router();
const {
  getAllUser,
  createUser,
} = require("");

router.route("/").get(getAllUser).post(createUser);


module.exports = router;