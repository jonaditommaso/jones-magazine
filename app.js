const express = require('express');
const cors = require('cors');

const app = express();

//settings
app.set('port', process.env.PORT || 5000)


//middlewares
app.use(cors());
app.use(express.json())

//routes
app.use('/api/conversation', require('./routes/conversation'))
//creo que es otra forma mas 'correcta' (pero larga), de hacer lo que hago en index.js con require('./routes/football')(app);

module.exports = app