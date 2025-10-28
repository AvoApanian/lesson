require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const { Pool } = require("pg"); 

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
const CorsOrigin = process.env.CorsOrigin || "http://localhost:5173";
const SaltRounds = process.env.SaltRounds
  ? parseInt(process.env.SaltRounds, 10)
  : 2;

function isStrongPass(password) {
  const re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>\/?\\|`~])[A-Za-z\d!@#$%^&*()_\-+=\[\]{};:'",.<>\/?\\|`~]{8,}$/;
  return re.test(password);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const app = express();
app.use(express.json());
app.use(cors({ origin: CorsOrigin }));


const pool = new Pool({
  user: process.env.userDb,
  host: process.env.host,
  database: process.env.database,
  password: process.env.passwordDb,
  port: process.env.portDb,
});

pool
  .connect()
  .then(() => console.log("✅ Connecté à PostgreSQL"))
  .catch((err) => console.error("❌ Erreur PostgreSQL :", err));


app.post("/login", async (req, res) => {
  const { mail, password } = req.body;

  if (!mail || !password)
    return res.status(400).json({ message: "Missed Data" });

  if (!isStrongPass(password))
    return res.status(400).json({
      passwordStrong: false,
      message: "Password is not strong enough",
    });

  if (!isValidEmail(mail))
    return res.status(400).json({
      mailValide: false,
      message: "Email is not valid",
    });

  try {
    const checkUser = await pool.query(
      "SELECT * FROM users WHERE mail = $1",
      [mail]
    );

    if (checkUser.rows.length > 0) {
      return res.status(400).json({ message: "Mail already exists" });
    }

    const hashed = await bcrypt.hash(password, SaltRounds);

    await pool.query("INSERT INTO users (mail, password) VALUES ($1, $2)", [
      mail,
      hashed,
    ]);

    return res.status(200).json({
      success: true,
      message: "User inserted successfully",
    });
  } catch (err) {
    console.error("Erreur ", err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server run on  http://127.0.0.1:${PORT}`);
});
