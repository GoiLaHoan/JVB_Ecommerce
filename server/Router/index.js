const express = require('express')
const router = express()
const bodyParser = require("body-parser")
const authRouter = require('./auth')
const productRouter = require('./product')

router.use(express.static("public"));


const cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:3000'
}

router.use(cors(corsOptions));




router.use('/api/auth', authRouter)
router.use('/api/product', productRouter)

module.exports = router