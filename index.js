const express = require('express')
const path = require('path')

//initializes the express app
const app = express()

//Makes an empty web page querry go to the index.html file
//in the public folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
  res.send('Hello World!')
})

//Hosts the server on specified port
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
