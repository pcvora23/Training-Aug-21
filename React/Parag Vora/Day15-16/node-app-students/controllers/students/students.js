const express = require("express");
// const StudentDomain = require('../../domains/student.domain.js');
const Student = require("../../models/student.model");
const router = express.Router();

class StudentController {
  static async getStudents(req, res) {
    const students = await Student.find();
    res.send(students);
  }
  static async addStudent(req, res) {
    var user = new Student(req.body);

    try {
      const result = await user.save();
      res.send(result);
    } catch (e) {
      res.status(500).send(e.message);
    }
  }

  static async getStudentById(req, res) {
    const studid = req.params.id;
    const student = await Student.findById(studid);
    if (student) {
      res.send(student);
    } else {
      return res.status(404).send("student not found");
    }
  }

  static async updateStudent(req, res) {
    const studid = req.params.id;
    const result = await Student.updateOne(
      { id: studid },
      {
        $set: {
          id: req.body.id,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          image:req.body.image,
          collegeName:req.body.collegeName,
          collegeLogo:req.body.collegeLogo
        },
      }
    );
    if(!result)
    {
        res.send('student not found')
    }
    else{
        res.send('student updated  successfully')
    }
  }

  static async deleteStudent(req, res) {
    const studentid = req.params.id;
    const result = await Student.deleteOne({ id: studentid });
    if (result.deletedCount == 0) {
      return res.status(404).send("student not found");
    } else {
      return res.send("student deleted successfully");
    }
  }
}

// get all the students
router.get("/", StudentController.getStudents);

// add student
router.post("/", StudentController.addStudent);

// get student by id
router.get("/:id", StudentController.getStudentById);

// update student
router.put("/:id", StudentController.updateStudent);

// delete student
router.delete("/:id", StudentController.deleteStudent);

module.exports = router;
