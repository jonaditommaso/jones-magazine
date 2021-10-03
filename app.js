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
app.use('/api/boca', require('./routes/boca'))
app.use('/api/river', require('./routes/river'))
app.use('/api/independiente', require('./routes/independiente'))
app.use('/api/racing', require('./routes/racing'))
app.use('/api/sanlorenzo', require('./routes/sanlorenzo'))
app.use('/api/science', require('./routes/science'))
app.use('/api/technology', require('./routes/technology'))
app.use('/api/health', require('./routes/health'))
app.use('/api/finance', require('./routes/finance'))
app.use('/api/futbolNews', require('./routes/futbolNews'))
app.use('/api/generalNews', require('./routes/generalNews'))
app.use('/api/positionsData', require('./routes/positionsData'))
//creo que es otra forma mas 'correcta' (pero larga), de hacer lo que hago en index.js con require('./routes/football')(app);
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function(_, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"), {
        function (err) {
            if (err) {
                res.status(500).send(err)
            }
        }
    })
})
module.exports = app