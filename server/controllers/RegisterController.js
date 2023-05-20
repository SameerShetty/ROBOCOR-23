const RobocorTeam = require("../models/TeamModel");
const RobocorSubscriber = require("../models/SubcriberModel");
const crypto = require("crypto");
const Razorpay = require("razorpay");

const EventDetails = [
  "lfr",
  "bbot",
  "rbsoc",
  "rgrace",
  "ardcls",
  "dcode",
  "pp",
  "ps",
  "fun",
];
const subscribe = async (req, res) => {
  const { email } = req.body;
  const subExists = await RobocorSubscriber.findOne({ email });
  if (subExists) {
    return res.status(401).json({ message: "Email already subscribed !!!" });
  } else {
    const subscriber = new RobocorSubscriber({
      email: email,
    });
    const newSubscriber = await subscriber.save();
    if (newSubscriber)
      return res.status(200).json("Thanks for subscribing !!!");
    else {
      console.log(error);
      return res.status(401).json(error.message);
    }
  }
};

const getEventDetails = (eventList) => {
  const gotEventDetails = [];
  eventList.forEach((element) => {
    gotEventDetails.push(EventDetails[Number(element) - 1]);
  });
  return gotEventDetails;
};

const register = async (req, res) => {
  // const { responseData, team } = req.body;
  // const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
  //   responseData;
  const {
    name,
    email,
    phone,
    clg,
    branch,
    usn,
    m1,
    m1email,
    m2,
    m2email,
    m3,
    m3email,
    eventList,
    TsacId,
  } = req.body;

  // const body = razorpay_order_id + "|" + razorpay_payment_id;

  // const expectedSignature = crypto
  //   .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
  //   .update(body.toString())
  //   .digest("hex");

  // const isAuthentic = expectedSignature === razorpay_signature;

  // if (isAuthentic) {
  const teamCount = await RobocorTeam.countDocuments({});
  const tNumber = "T" + Number(teamCount + 1);
  try {
    const team = new RobocorTeam({
      token: tNumber,
      TLead: name,
      TLeadUsn: usn,
      TLeadEmail: email,
      TLeadPhone: phone,
      TLeadClg: clg,
      TLeadBranch: branch,
      m1: m1,
      m1Email: m1email,
      m2: m2,
      m2Email: m2email,
      m3: m3,
      m3Email: m3email,
      eventList: getEventDetails(eventList),
      TsacId,
    });
    const newTeam = await team.save();
    if (newTeam)
      return res.status(200).json({
        message: "Registered successfully !!!",
        token: newTeam.token,
      });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }

  // } else {
  //
  // }
};

// const checkout = async (req, res) => {
//   const { amount } = req.body;
//   const instance = new Razorpay({
//     key_id: process.env.RAZORPAY_API_KEY,
//     key_secret: process.env.RAZORPAY_APT_SECRET,
//   });

//   const options = {
//     amount: Number(amount * 100),
//     currency: "INR",
//   };
//   const order = await instance.orders.create(options);
//   res.status(200).json({
//     success: true,
//     order,
//   });
// };
// const getKey = (req, res) => {
//   return res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
// };
module.exports = {
  register,
  subscribe,
  // checkout,
  // getKey,
};
