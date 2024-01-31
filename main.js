const app = require('express')();
const port = 8080;

app.get('/tshirt',(req,res) =>{
    res.status(200).send({
        tshirt: 'red ',
        size:'large'

    })

});


//fkuhsudhuifh
