const express = require('express')
const path = require('path')

const port = process.env.PORT || 4000

const app = express()

app.use(express.static(path.join(__dirname, 'dist1')))

console.log(__dirname)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist1/index.html'))
})

app.listen(port, () => {
    console.log('Server running on port ' + port)
})