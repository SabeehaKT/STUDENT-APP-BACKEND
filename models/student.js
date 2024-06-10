const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name":String,
        "rollno":String,
        "admno":String,
        "college":String
    }
)
 
const studentmodel=mongoose.Model("students",schema);
module.exports={studentmodel}