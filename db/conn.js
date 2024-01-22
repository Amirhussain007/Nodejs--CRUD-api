const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/UserApi")
.then(()=>console.log("DB connected"))
.catch(()=>console.log("No connect"))