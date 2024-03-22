const express = require('express');
//declare router => set path for web
const router = express.Router();

router.get('/', (req, res) => {
    res.send ("greenwhich hompage")
})



module.exports = router;