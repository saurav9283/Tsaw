const locationModel = require("../Models/locationinsertModel.js");

exports.location = async(req, res) => {
  try {
    const {from , coordinateFrom1,coordinateFrom2, to, coordinateTo1,coordinateTo2} = req.body;
    const data = await locationModel.create({from , coordinateFrom1,coordinateFrom2 , to, coordinateTo1,coordinateTo2})
    // await data.save()
    res.status(200).send({
      message: "State coordinates saved",
      data: data,
    });
  } catch (error) {
    console.log( "here is the error" , error)
  }
};
