const express = require('express');
const Employee = require('../models/Employee');

const router = express.Router();

// INDEX
// GET api/employees
router.get('/', (req, res, next) => {
	Employee.find()
		.then((employees) => res.json(employees))
		.catch(next);
});

// SHOW
// GET api/employees/idnumber
router.get('/:id', (req, res, next) => {
	Employee.findById(req.params.id)
		// .then((employee) => res.json(employee));
		.then((employee) => {
			if (!employee) {
				res.sendStatus(404);
			} else {
				res.json(employee);
			}
		})
		.catch(next);
});

// CREATE
// POST api/employees
router.post('/', (req, res, next) => {
	Employee.create(req.body)
		.then((employee) => res.status(201).json(employee))
		.catch(next);
});

// UPDATE
// PUT api/employees/idnumber
router.put('/:id', (req, res, next) => {
	Employee.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	})
		// .then((employee) => res.json(employee));
		.then((employee) => {
			if (!employee) {
				res.sendStatus(404);
			} else {
				res.json(employee);
			}
		})
		.catch(next);
});

// DESTROY
// DELETE api/employees/idnumber
router.delete('/:id', (req, res, next) => {
	Employee.findOneAndDelete({
		_id: req.params.id,
	})
		// .then(() => res.sendStatus(204));
		.then((employee) => {
			if (!employee) {
				res.sendStatus(404);
			} else {
				res.sendStatus(204);
			}
		})
		.catch(next);
});

module.exports = router;
