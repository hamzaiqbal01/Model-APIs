const Symptoms = require("../models/Symptoms");

exports.Symptoms = async (req, res) => {
  const { desaese_name, symptoms, treatment } = req.body;

  // Destructure the array field Blog_detail
  const [symptoms1, symptoms2, symptoms3] = symptoms;

  try {
    const isBlogExist = await Symptoms.findOne({ desaese_name });

    if (!isBlogExist) {
      const newSymptom = new Symptoms({
        desaese_name,
        symptoms: [symptoms1, symptoms2, symptoms3],
        treatment,
      });
      await newSymptom.save();
      res
        .status(200)
        .send({ message: "Symptom Added Successfully", code: 200 });
    } else {
      res
        .status(400)
        .json({ message: "This Symptom is already used", code: 400 });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

exports.FilterSymptoms = async (req, res) => {
  console.log(req.body);
  const { symptom } = req.body;

  const search = await Symptoms.find({ symptoms: { $all: symptom } });
  res.status(200).json({
    success: true,
    data: search,
  });
};
