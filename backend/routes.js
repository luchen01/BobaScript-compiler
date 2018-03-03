const express = require('express');
const router = express.Router();

const compiler = require("../compiler/compiler");

// YOUR API ROUTES HERE

router.use('/users', (req, res) => {
    res.json({ success: true });
});

router.post('/parseBobaScript', (req, res) => {
  res.send(compiler(req.body.bobaScript));
});

module.exports = router;
