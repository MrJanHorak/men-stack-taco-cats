import { Taco } from '../models/taco.js'

function index(req,res) {
  // Find all tacos
  Taco.find({})
  // When we have all the tacos
  .then(tacos => {
    // Do something with the tacos
    res.render("tacos/index", {
      title: "🌮",
      tacos,

    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/tacos")
  })
}

export {
  index
}