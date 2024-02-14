const router = require("express").Router();
const {
  getAllThought,
  createThought,
} = require("");


router.route("/").get(getAllThought).post(createThought);

module.exports = router;