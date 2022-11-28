import { db } from '../db.js';
import bcrypt from 'bcryptjs';

export const register = (req, res) => {
  //CHECK EXISTING USER
  const q = 'SELECT * FROM users WHERE email email = ? OR username = ?';

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.lenght) return res.status(409).json('User already exist!');

    //Hash to password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = 'INSERT INTO users(`username`, `email`, `password`) VALUES (?)';
    const values = [res.body.username, res.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json('User has been created.');
    });
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
