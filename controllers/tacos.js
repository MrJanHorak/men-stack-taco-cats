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

function create(req,res) {
  req.body.owner = req.user.profile._id
  req.body.tasty = !!req.body.tasty
  Taco.create(req.body)
  .then(taco => {
    res.redirect('/tacos')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/tacos')
  })
}

export {
  index,
  create
}