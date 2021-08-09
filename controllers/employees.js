const express = require('express');
const Employee = require('../models/Employee');
const {
	handleValidateId,
	handleRecordExists,
} = require('../middleware/custom_errors');
const router = express.Router();

// INDEX
// GET /employees
router.get('/employees', (req, res, next) => {
	Employee.find()
		.then((employees) => res.json(employees))
		.catch(next);
});

// SHOW
// GET /employees/idnumber
router.get('/employees/:id', handleValidateId, (req, res, next) => {
	Employee.findById(req.params.id)
		.then(handleRecordExists)
		.then((employee) => {
			res.json(employee);
		})
		.catch(next);
});

// CREATE
// POST /employees
router.post('/employees', (req, res, next) => {
	Employee.create(req.body)
		.then((employee) => {
			res.status(201).json(employee);
		})
		.catch(next);
});

// UPDATE
// PUT /employees/idnumber
router.put('/employees/:id', handleValidateId, (req, res, next) => {
	Employee.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	})
		.then(handleRecordExists)
		.then((employee) => {
			res.json(employee);
		})
		.catch(next);
});

// DESTROY
// DELETE /employees/idnumber
router.delete('/employees/:id', handleValidateId, (req, res, next) => {
	Employee.findOneAndDelete({
		_id: req.params.id,
	})
		.then(handleRecordExists)
		.then((employee) => {
			res.sendStatus(204);
		})
		.catch(next);
});

module.exports = router;
