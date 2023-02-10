const express = require('express')
const app = express()
const { PORT = 8001 } = process.env

// app.use(express.json())

// const passport = require('./lib/passport')
// app.use(passport.initialize())

// const router = require('./router')
// app.use(router)
app.listen(PORT, () => {
    console.log(`Server nyala di port ${PORT}`)
})