const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name":String,
        "admno":String,
        "rollno":String,
        "pname":String,
        "college":String,
        "dob":String,
        "email":String

    }
)
 
const studentmodel=mongoose.Model("students",schema);
module.exports={studentmodel}