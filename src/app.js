const express = require('express');
const port = process.env.PORT || 3000;
require('./db/conn');
// const Ranking = require('./models/rankData');
const mensRouter = require('./routes/mensData')
const app = express()
app.use(express.json());
app.use(mensRouter)


app.listen(port, ()=>{
    console.log(`App is listening at port number ${port}`)
})