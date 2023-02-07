const express = require('express');

const employeeController = require('../controllers/admin/employeeController');

const router = express.Router();

router.get('/',employeeController.getAllEmployees); // is equivalent to /admin/
router.get('/add-employee',employeeController.getAddEmployee); // is equivalent to /admin/add-employee
router.post('/add-employee',employeeController.postAddEmployee); // is equivalent to /admin/add-employee
router.get('/edit-employee/:employeeId',employeeController.getEditEmployee); // is equivalent to /admin/edit-employee/:employeeId
router.post('/update-employee',employeeController.postEditEmployee); // is equivalent to /admin/update-employee
router.get('/delete-employee/:employeeId',employeeController.deleteEmployee); // is equivalent to /admin/delete-employee/:employeeId

module.exports = router;