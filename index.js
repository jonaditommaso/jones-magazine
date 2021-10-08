const app = require('./app');
require('dotenv').config(); //antes de requerir database
require('./database');

app.listen(app.get('port'));