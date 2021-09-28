const axios = require('axios')

const express = require('express')
const app = express()

app.get('http://localhost/3000/melkamu')



app.listen(3000, () => console.log('server is running'))