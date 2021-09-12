
require('./connect-mongo')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = 9000
const router = require('./router')

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello from server!'))
app.use("/uploads", express.static("uploads"));
app.use(router)



app.use(function (req, res, next) {
  res.header('application/json;charset=UTF-8');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});


app.use((err, req, res, next) => {
  let message = err.message
  let stack = err.stack

  res.status(400)
    .json({ message, stack })
})

app.listen(port, (err) => console.log(err || 'Server open at port ' + port))