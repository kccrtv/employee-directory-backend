const express = require('express');
const Employee = require('../models/Employee');

const router = express.Router();

// INDEX
// GET api/employees
router.get('/', (req, res) => {
	Employee.find().then((employees) => res.json(employees));
});

// SHOW
// GET api/employees/idnumber
router.get('/:id', (req, res) => {
	Employee.findById(req.params.id).then((employee) => res.json(employee));
});

// CREATE
// POST api/employees
router.post('/', (req, res) => {
	Employee.create(req.body).then((employee) => res.json(employee));
});

// UPDATE
// PUT api/employees/idnumber
router.put('/:id', (req, res) => {
	Employee.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	}).then((employee) => res.json(employee));
});

// DESTROY
// DELETE api/employees/idnumber
router.delete('/:id', (req, res) => {
	Employee.findOneAndDelete({
		_id: req.params.id,
	}).then((employee) => res.json(employee));
});

module.exports = router;
