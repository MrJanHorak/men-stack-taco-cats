import { Ingredient } from '../models/ingredient.js'

function createIngredient(req, res) {
  Ingredient.create(req.body)
  .then((ingredient)=> res.json(ingredient))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

export {
  createIngredient
}