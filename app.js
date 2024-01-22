const express = require("express")
const app = express()
require("./db/conn")
const User = require("./models/user")

app.use(express.json())

app.get("/user/:id", async (req, res) => {
    const user = await User.findById(req.params.id)
    res.json({
        success: true,
        user
    })

})

app.get("/find", async (req, res) => {
    const user = await User.find()
    res.json({
        success: true,
        user
    })


})

app.post("/new", async (req, res) => {
    const user = await User.create(req.body)
    user.save()
    res.json({
        success: true,
        user
    })
})


app.put("/update/:id", async (req, res) => {
    let user=await User.findById(req.params.id)
   user= await User.findByIdAndUpdate(req.params.id,req.body)
    res.json({
        success: true,
        user
    })
})

app.delete("/del/:id", async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id)
    res.json({
        success: true,
        user
    })
})


app.listen(2000, () => {
    console.log("Server is working on port 2000")
})