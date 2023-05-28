var User = require("../models/user.model");

exports.SignIn = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    // add required field check later and throw error
    const isUserExist = await User.findOne({ email });
    if (!isUserExist) {
      const newUser = new User({ email, firstName, password, lastName });
      await newUser.save();
      res.status(200).send({ message: "User Added SuccessFully", code: 200 });
    } else {
      res
        .status(200)
        .json({ message: `This Email is already used`, code: 400 });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

exports.Login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(200).json({ message: "User Not Found", code: 400 });
      return;
    }
    if (user && user.password === password) {
      res.status(200).json({
        message: "You are successfully signed In",
        data: user,
        code: 200,
      });
    } else {
      res.status(200).json({ message: "Invalid Email or Password", code: 400 });
    }
  } catch (err) {
    res.status(200).json({ message: "Invalid Credentials" });
    console.log(err);
  }
};
