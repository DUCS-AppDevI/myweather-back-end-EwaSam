// authRoutes.js
const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/auth', async (req, res) => {
  const username = req.body.email;
  const password = req.body.password;
  console.log(`userId: ${username}`);

  try {
    let user = await User.findOne({ userId: username });

    if (user && password === user.password) {
      console.log('Authentication successful');
      await User.updateOne({ userId: username }, { $set: { lastlogin: new Date() } });
      user = await User.findOne({userId:username});
      console.log(user.password, user.userId, user.tDate, user.lastLogin);
      res.status(200).json({ status: 200, message: 'User authenticated' });
    } else {
      console.log('Authentication failed');
      res.status(401).json({ status: 401, message: 'User credentials do not match' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, message: 'Internal server error' });
  }
});

module.exports = router;
