var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  let year = 2024;
  let university = "greenwich";

  res.render('index', { year, university });
})

router.get('/demo', (req, res)  => {
  res.render('/demo', {hn:"Hà Nội", vn:"Việt Nam"});
})

router.get('/test', (req, res) => {
  let a = 6;
  let b = 3.14;
  let c = "m";
  let d = true;
  let sports = ["football", "badminton", "swimming"];

  res.render('test', 
  {
    integer: a,
    double: b,
    character: c,
    boolean: d
  }
  );
})

module.exports = router;
