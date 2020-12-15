const express = require('express')
const app = express()
const router = express.Router()
let routers = require('./routes/routes.js')

let exam = {
    "test": 0,
    "tes1": 1,
}
//app.use(routers);

app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))