//declare library 'express'
const express = require('express');
//declare router => set path for web
const router = express.Router();

//declare homepage (localhost:3000)
router.get('/', (req, res) => {
  res.render('Index');
})

router.get('/hanoi', (req, res) => {
  res.render('greenwich/hn');
})

router.get('/HoChiMinh', (req, res) => {
  res.render('greenwich/hcm')
})

router.get('/DaNang', (req, res) => {
  res.render('greenwich/dn')
})

router.get('/CanTho', (req, res) => {
  res.render('greenwich/ct')
})

//export module => required
module.exports = router;
