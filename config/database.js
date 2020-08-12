const mongoose  = require('mongoose')
const config = require('config')

const database = config.get('mongoURI')

const connectDatabase = () => {
    mongoose.connect(database, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(() => console.log('mongo db connected'))
       .catch(err => {
           console.error(err.message)
           process.exit(1)
       })
}

module.exports = connectDatabase;