const mongoose = require('mongoose');



const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
},
    age: {
        type: Number,
        required: true,
        min: 23,
        max: 65
},
    gender:{
        type: String,
        required: true,
        enum: ['male', 'female'] 
},
    NIC:{
        type: String,
        required: true
},
    Email: {
        type: String,
        required: true
}, 
},{
    timestamps: true,
    }
)


const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;