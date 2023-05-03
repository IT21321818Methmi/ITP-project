const express = require('express');
const teacher = require('../models/teacher')

const router = require("express").Router();


router.post('/', async (req, res) => {
    const { name, Email, NIC, gender, age } = req.body;
  
    try {
      const teacher = new Teacher({ name, Email, NIC, gender, age });
      await teacher.save();
      res.json(teacher);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });


const {
    GetTeacher, 
    SetTeacher, 
    UpdateTeacher, 
    DeleteTeacher
} = require('../controllers/teacherController')

router.route('/').get(GetTeacher).post(SetTeacher)
router.route('/:id').put(UpdateTeacher).delete(DeleteTeacher)


module.exports = router






