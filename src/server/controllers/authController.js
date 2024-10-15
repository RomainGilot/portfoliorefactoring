const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = (req, res) => {
  const { username, password } = req.body;

  if (!req.user) {
    return res.status(403).json({ message: "Interdit : Vous devez être connecté pour enregistrer des utilisateurs." });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, hashedPassword], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Erreur lors de l'enregistrement de l'utilisateur." });
    }
    res.status(201).json({ message: "Utilisateur enregistré avec succès." });
  });
};

const login = (req, res) => {
  const { username, password } = req.body;

  db.query("SELECT * FROM users WHERE username = ?", [username], (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).json({ message: "Identifiants invalides." });
    }

    const user = results[0];

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: "Identifiants invalides." });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  });
};

module.exports = { register, login };
