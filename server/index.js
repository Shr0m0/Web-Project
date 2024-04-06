const express = require('express')
const cors = require('cors')
const { blogRoute } = require('./routes/blog.js') 

const port = 3001

const app = express()
app.use(cors())

app.use('/',blogRoute)




app.listen(port,() => {
    console.log(`Server is listening on port ${port}`)
})