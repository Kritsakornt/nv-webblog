let express = require('express')
const {sequelize} = require('./models')
let cors = require('cors')
const config = require('./config/config')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

require('./userPassport')

require('./routes')(app)

let port = 8081
sequelize.sync({force: false}).then(() => {
  app.listen(port, function () {
      console.log('Server running on ' + port)
  })
})