const express = require('express');
const app = express();
const {graphqlHTTP} = require('express-graphql');


//MIDDLEWARE to use graphqlHTTP
app.use('/graphql' , graphqlHTTP({

}));

app.listen(3000 , ()=>{
    console.log("Listen on port 3000")
})