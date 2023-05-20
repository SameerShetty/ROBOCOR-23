const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({
  token: {
    type: String,
    unique: true,
    required: true,
  },
  TsacId: {
    type: String,
    unique: true,
    required: true,
  },
  TLead: {
    type: String,
    require: [1, "Team leader required !!!"],
  },
  TLeadUsn: {
    type: String,
    require: [1, "Team leader usn required !!!"],
  },
  TLeadClg: {
    type: String,
    require: [1, "Team leader clg required !!!"],
  },
  TLeadBranch: {
    type: String,
    require: [1, "Team leader branch required !!!"],
  },
  TLeadEmail: {
    type: String,
    require: [1, "Team leader email required !!!"],
  },
  TLeadPhone: {
    type: String,
    require: [1, "Team leader phone required !!!"],
  },
  m1: {
    type: String,
  },
  m1Email: {
    type: String,
  },
  m2: {
    type: String,
  },
  m2Email: {
    type: String,
  },
  m3: {
    type: String,
  },
  m3Email: {
    type: String,
  },
  eventList: {
    type: [String],
    default: [],
  },
  // razorpay_order_id: {
  //   type: String,
  //   required: true,
  // },
  // razorpay_payment_id: {
  //   type: String,
  //   required: true,
  // },
  // razorpay_signature: {
  //   type: String,
  //   required: true,
  // },
});

module.exports = mongoose.model("RobocorTeam", teamSchema);
