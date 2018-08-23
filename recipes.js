const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const data = require('./data.js')
const recipe = require('./Models/recipe.js')

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!')
    recipe.create({data})
    .then((data)=>{console.log(data.title)})
    // .catch((err) => {console.log("ERROR::",err)})
  })

  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
