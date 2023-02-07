const db = require('../util/database');

module.exports = class Employee{
    constructor(name,email,designation){
        this.name = name;
        this.email = email;
        this.designation = designation;
    }

    save(){
        let currentDate = new Date();
        return db.execute(
            'INSERT INTO employee (name,email,designation,created_at) VALUES (?,?,?,?)',
            [this.name,this.email,this.designation,currentDate]
        );
    }

    update(employeeId){
        let currentDate = new Date();
        return db.execute(
            'UPDATE employee set employee.name = ?, employee.email = ?, employee.designation = ?, employee.updated_at = ? WHERE employee.id = ?',
            [this.name,this.email,this.designation,currentDate,employeeId]);
    }

    static getAllEmployees(){
        return db.execute('SELECT * FROM employee');
    }

    static getEmployee(employeeId){
        return db.execute('SELECT * FROM employee WHERE employee.id = ?',[employeeId]);
    }

    static deleteEmployee(employeeId){
        return db.execute('DELETE FROM employee WHERE employee.id = ?',[employeeId]);
    }
}