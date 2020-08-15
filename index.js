//1.variabel untuk install npm
const express = require('express')
const bodyParser = require('body-parser')
const connection = require('./config/database')

const userRoutes = require('./routes/users')
const movieRoutes = require('./routes/movies');
const subscriptionRoutes = require('./routes/subsciptions');
const historyWatchRoutes = require('./routes/history')

const app = express()

app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())

//2conection database dengan mysql
connection.connect(error => {
    if (error) {
        console.log('error conecting')
    }
    console.log('connected')
})



app.get('/',(req,res) => {
    res.send('welcome')
})

app.use('/', userRoutes)
app.use('/', movieRoutes)
app.use('/', subscriptionRoutes)
app.use('/', historyWatchRoutes)

app.listen(3000, () => {
    console.log('server berjalan')
})


