const mongoose = require("mongoose");

const subscribeSchema = mongoose.Schema({
  email: {
    type: String,
    require: [1, "Email required !!!"],
    unique: true,
  },
});

module.exports = mongoose.model("RobocorSubscriber", subscribeSchema);
