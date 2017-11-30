const express = require('express')
const app = express()
const  bodyParser = require('body-parser')

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/', (req, res) => res.send('Hello Tech Talk'))

app.post('/postTechTalkMessage', (req,res)=>{
    res.send(req.body.message);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))