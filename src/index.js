const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();


app.use(express.json()); //Convert res parameters to json file .
app.use(express.urlencoded({ extended : true }));  //it is used to read uncoding digits 

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);

});
