require('dotenv').config(); 
const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
const CorsOrigin = process.env.CorsOrigin || "http://localhost:5173";
const SaltRounds = process.env.SaltRounds ? parseInt(process.env.SaltRounds, 10) : 2;

function isStrongPass(password) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>\/?\\|`~])[A-Za-z\d!@#$%^&*()_\-+=\[\]{};:'",.<>\/?\\|`~]{8,}$/;
  return re.test(password);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const app = express();
app.use(express.json());
app.use(cors({ origin: CorsOrigin }));

app.post("/login", async (req, res) => {
  const { mail, password } = req.body;

  if (!mail || !password) {
    return res.status(400).json({ message: "Missed Data" });
  }

  if (!isStrongPass(password)) {
    return res.status(400).json({
      passwordStrong: false,
      message: "Password is not strong enough",
    });
  }

  if (!isValidEmail(mail)) {
    return res.status(400).json({
      mailValide: false,
      message: "mail is not valide",
    });
  }

  try {
    const hashed = await bcrypt.hash(password, SaltRounds);

    res.json({
      success: true,
      message: "succes hash password",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Failed to hash password",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Back run on http://localhost:${PORT}`);
});
