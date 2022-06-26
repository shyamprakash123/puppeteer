const express= require('express');
const maps = require('./maps');

const app = express();
const PORT = process.env.PORT || 3000 ;
const fs = require('fs').promises;




app.get('/', async(req,res) => {
    let para = {
        first:req.query.first,
        second:req.query.second
      /*  pickuplon:req.query.pickuplon,
        pickupadd:req.query.pickupadd,
        droplat:req.query.droplat,
        droplon:req.query.droplon,
        dropadd:req.query.dropadd */
    }
    await fs.writeFile('./data.json', JSON.stringify(para));
    const response = await maps();
       res.send(JSON.stringify(response)); 

      
    
});



app.listen(PORT,(err) => {
    if(err) throw err;
    console.log('Listening to port');

});

