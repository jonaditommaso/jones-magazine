const app = require('./app');
require('dotenv').config(); //antes de requerir database
require('./database');
require('./routes/football')(app);

app.listen(app.get('port'));