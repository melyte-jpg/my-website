const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");


const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.json({
      message: "User registered successfully",
      user,
    });

  } catch (err) {
    console.log("REGISTER ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

// LOGIN (with debug logs)
const login = async (req, res) => {
  console.log("LOGIN BODY:", req.body);

  try {
    console.log("STEP 1");

    const { email, password } = req.body;

    console.log("STEP 2");

    const user = await User.findOne({ where: { email } });

    console.log("STEP 3");

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    console.log("STEP 4");

    const isMatch = await bcrypt.compare(password, user.password);

    console.log("STEP 5");

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    console.log("STEP 6");

    const token = jwt.sign(
      { id: user.id, email: user.email },
      "secretkey",
      { expiresIn: "1d" }
    );

    return res.json({
      message: "Login successful",
      token,
      user,
    });

  } catch (err) {
    console.log("LOGIN ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { register, login };
