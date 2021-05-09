import { Employee } from "./employee";

let employee: Employee = {id: 1, name: "Sumit", salary: 50000, permanent: true, department: {id: 101, name: "Payroll"}, skills: [{id: 1, name: "HTML"}, {id: 2, name: "CSS"}, {id: 3, name: "JavaScript"}]};

/*console.log("id: "+employee.id);
console.log("name: "+employee.name);
console.log("salary: "+employee.salary);
console.log("permanent: "+employee.permanent);
console.log("department id: "+employee.department.id);
console.log("department name: "+employee.department.name);

for (let index = 0; index < employee.skills.length; index++) {
    console.log("skill["+index+"]:"+employee.skills[index].id+", "+employee.skills[index].name);
}*/

class EmployeeTest{
    private employee: Employee;
    constructor(employee: Employee){
        this.employee=employee;
    }

    display(): void{
        console.log("id: "+employee.id);
        console.log("name: "+employee.name);
        console.log("salary: "+employee.salary);
        console.log("permanent: "+employee.permanent);
        console.log("department id: "+employee.department.id);
        console.log("department name: "+employee.department.name);

        for (let index = 0; index < employee.skills.length; index++) {
            console.log("skill["+index+"]:"+employee.skills[index].id+", "+employee.skills[index].name);
        }
    }
}

const employeeTest: EmployeeTest = new EmployeeTest(employee);
employeeTest.display();