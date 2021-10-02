const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

//settings
app.set('port', process.env.PORT || 5000)


//middlewares
app.use(cors());
app.use(express.json())

//routes
app.use('/api/conversation', require('./routes/conversation'))
// app.use('/api/football/positionsData', require('./routes/football'))
//creo que es otra forma mas 'correcta' (pero larga), de hacer lo que hago en index.js con require('./routes/football')(app);
// app.use(express.static(path.join(__dirname, "./client/build")));

// app.get("*", function(_, res) {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"), {
//         function (err) {
//             if (err) {
//                 res.status(500).send(err)
//             }
//         }
//     })
// })
module.exports = app