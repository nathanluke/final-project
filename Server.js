const express = require('express')
const connectdatabase =require('./config/database')


const app = express();

app.get('/', (req ,res) => res.json({ msg : 'welcome to hyped'}))


// define routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/Loggedinuser', require('./routes/Loggedinuser'))

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
