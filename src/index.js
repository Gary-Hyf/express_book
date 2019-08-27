const express= require('express');
require('dotenv').config();
const routes= require('./routes');
const app= express();

const PORT=process.env.PORT || 3000;

app.use(express.json());

app.use('/v1',routes);

app.listen(PORT,()=>{
    console.log('server listen on port ${PORT}');
});