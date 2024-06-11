const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name":{type:String,required:true},
        "admno":{type:String,required:true},
        "rollno":{type:String,required:true},
        "pname":{type:String,required:true},
        "college":{type:String,required:true},
        "dob":{type:String,required:true},
        "email":{type:String,required:true}

    }
)
 
const studentmodel=mongoose.model("students",schema);
module.exports={studentmodel}