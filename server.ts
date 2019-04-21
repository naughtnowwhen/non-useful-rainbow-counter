import express = require('express');

const PORT = process.env.PORT || 3000;

const app : express.Application = express();

app.listen(PORT, ()=> console.log(`listening on port : ${PORT}`))


app.use(express.static('./public'))


app.get('/testing', (req, res)=> {
  res.send('testint testing');
})
