var WheatDisease = require("../models/wheatDisease.model");

exports.addDisease = async (req, res) => {
  try {
    const { name, symptoms, treatment, madicineImage } = req.body;
    const isNameExist = await WheatDisease.findOne({ name });
    if (!isNameExist) {
      const addNewDisease = new WheatDisease({
        name,
        symptoms,
        treatment,
        madicineImage,
      });
      await addNewDisease.save();
      res
        .status(200)
        .send({ message: "Disease Added SuccessFully", code: 200 });
    } else {
      res
        .status(200)
        .json({ message: `This Disease already Exist`, code: 400 });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

exports.getDiseaseList = async (req, res) => {
  try {
    const diseaseList = await WheatDisease.find();
    res.status(200).json({
      message: "List of Disease",
      data: diseaseList,
      code: 200,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

exports.AI_desease = async (req, res) => {
  const diseaseName = req.body.class; // Assuming the disease name is received in the request body under the "name" field
  console.log(diseaseName);

  try {
    const diseaseList = await WheatDisease.find({ name: diseaseName });
    res.status(200).json({
      message: "Matching Disease",
      data: diseaseList,
      code: 200,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};
