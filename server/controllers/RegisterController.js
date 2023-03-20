const RobocorTeam = require("../models/TeamModel");
const RobocorSubscriber = require("../models/SubcriberModel");

const EventDetails = [
  "event1",
  "event2",
  "event3",
  "event4",
  "event5",
  "event6",
  "event7",
  "event8",
  "event9",
  "event10",
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
const register = async (req, res) => {
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
  } = req.body;
  try {
    const team = new RobocorTeam({
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
    });

    const newTeam = await team.save();
    if (newTeam)
      return res.status(200).json({ message: "Registered successfully !!!" });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: error.message });
  }
};

const payment = async (req, res) => {};

const getEventDetails = (eventList) => {
  const gotEventDetails = [];
  eventList.forEach((element) => {
    gotEventDetails.push(EventDetails[Number(element) - 1]);
  });
  return gotEventDetails;
};
module.exports = {
  register,
  subscribe,
};
