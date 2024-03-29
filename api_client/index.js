require('dotenv').config()
const express = require('express')
const package = require('./package.json')
const routes = require('./routes')
const cors = require('cors')




const { env: { PORT }, argv: [, , port = PORT || 8080], } = process;

(async () => {
    
    // await mongoose.connect(url, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true })

    // express

    const app = express()

    app.use(cors())
    
    app.use('/api', routes)
    

    app.use(function (req, res, next) {
        res.status(404).json({ error: 'Not found.' })
    })

    app.listen(port, () => console.log(`${package.name} ${package.version} up on port ${port}`))

})()