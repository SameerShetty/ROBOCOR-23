const RobocorResult = require("../models/ResultsModel");

const getResults = async (req, res) => {
  try {
    const results = RobocorResult.find({});
    if (results) return res.status(200).json(results);
    else
      return res
        .status(404)
        .json({ message: "Results are yet to be announced !!!" });
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .json({ message: "Results are yet to be announced !!!" });
  }
};

module.exports = { getResults };
