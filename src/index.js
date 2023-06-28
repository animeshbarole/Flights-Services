const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();


app.use(express.json()); //Convert res parameters to json file .
app.use(express.urlencoded({ extended : true }));  //it is used to read uncoding digits 

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);

    const {Airport,City} = require('./models');
   const city = await City.findByPk(10);
   console.log(city);

  //  const airport = await Airport.create({name :'DeviAhilya Airport',code :'IND'});
  //  console.log(airport);
     
   // const response = await city.createAirport({name :'Bijasan Airport',code :'IND'});

  await City.destroy({
    where :{
        id :10,
    }
  })

 

    
  //  console.log(city);

});
