const express = require('express');
const router = express.Router();
const compiler = require('../compiler/compiler.js');

// YOUR API ROUTES HERE

// console.log(compiler("boba will not move"));
let source = "while ( color of boba > color of gate or color of boba < color of gate ) do boba will move";

console.log(compiler(source));

router.post('/parseBobaScript', (req, res)=>{
    res.send(compiler(req.body.bobaScript));
});


// SAMPLE ROUTE
router.use('/users', (req, res) => {
    res.json({ success: true });
});

module.exports = router;
