const Employee = require('../../models/employee');

exports.getAllEmployees = (req,res,next) => {
    Employee.getAllEmployees()
        .then(([rows, fieldData]) => {
            res.render('admin/employees',{
                'title':'Employees',
                'employees':rows,
            });
        })
        .catch(err => console.log(err));
};

exports.getAddEmployee = (req,res,next) => {
    res.render('admin/add-employee',{
        'title':'Add Employee',
        'heading':'Add Employee',
        'editMode':false,
        'action':'/admin/add-employee',
    });
};

exports.postAddEmployee = (req,res,next) => {
    let name = req.body.name.trim();
    let email = req.body.email.trim();
    let designation = req.body.designation.trim();

    let employee = new Employee(name,email,designation);
    employee.save()
        .then(() => {
            res.redirect('/admin');
        })
        .catch(err => console.log(err));
};

exports.getEditEmployee = (req,res,next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/admin');
    }
    const employeeId = req.params.employeeId;
    Employee.getEmployee(employeeId)
        .then(([employee]) => {
            if (!employee[0]) {
                return res.redirect('/admin');
            }
            res.render('admin/add-employee', {
                'title': 'Edit Employee',
                'heading':'Edit Employee',
                'editMode':editMode,
                'employee':employee[0],
                'action':'/admin/update-employee',
            });
        })
        .catch(err => {console.log(err)});
};

exports.postEditEmployee = (req,res,next) => {
    let updatedName = req.body.name.trim();
    let updatedEmail = req.body.email.trim();
    let updatedDesignation = req.body.designation.trim();
    let updatedEmployeeId = req.body.employeeId;

    let employee = new Employee(updatedName,updatedEmail,updatedDesignation);
    employee.update(updatedEmployeeId)
        .then(() => {
            res.redirect('/admin');
        })
        .catch(err => console.log(err));
};

exports.deleteEmployee = (req,res,next) => {
    let employeeId = req.params.employeeId;
    if(!employeeId){
        res.redirect('/admin');
    }
    Employee.deleteEmployee(employeeId)
        .then(() => {
            res.redirect('/admin');
        })
        .catch(err => console.log(err));
}