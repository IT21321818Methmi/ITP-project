const asyncHandler = require('express-async-handler')

const Teacher = require('../models/teacher')

// @description GetTeacher
// @route GET/api/teacher
// @access Private

const GetTeacher = asyncHandler(async(req,res) => {
    const teacher = await Teacher.find()

    res.status(200).json(teacher)
})

// @description SetTeacher
// @route POST/api/teacher
// @access Private

const SetTeacher = asyncHandler(async(req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const teacher = await Teacher.create({
        text: req.body.text,
    })
    res.status(200).json(teacher)
})

// @description UpdateTeacher
// @route PUT/api/teacher/:id
// @access Private

const UpdateTeacher = asyncHandler(async(req,res) => {
    const teacher = await Teacher.findById(req.params.id)

    if(!teacher){
        res.status(400)
        throw new Error('Teacher not found')
    }

    const updatedTeacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedTeacher)
})

// @description DeleteTeacher
// @route DELETE/api/teacher/:id
// @access Private

const DeleteTeacher = asyncHandler(async(req,res) => {
    const teacher = await Teacher.findById(req.params.id)

    if(!teacher){
        res.status(400)
        throw new Error('Teacher not found')
    }

    await teacher.remove()

    const updatedTeacher = await Teacher.findByIdAndDelete(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json({id: req.params.id})
})

module.exports = {
    GetTeacher,
    SetTeacher,
    UpdateTeacher,
    DeleteTeacher,
}