'use strict';

const mongoose = require('mongoose');

const MONGODB = 'mongodb://localhost:27017/ProyectoAppFood';


mongoose.connect(MONGODB, {     
    useNewUrlParser: true,      
    useUnifiedTopology: true,   
    useCreateIndex: true,       
    useFindAndModify: false     // https://mongoosejs.com/docs/deprecations.html
})

.then(db => console.log('Database CONNECTED'))

.catch(err => console.log(err));