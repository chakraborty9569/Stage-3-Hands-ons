/*var employee={
    firstName: "John",
    lastName: "Stoke",
    Salary: 5000,
    permanentStaff: true
};

console.log(employee);*/

/*var myJson='{"firstName":"John", "lastName":"Stoke", "Salary": 5000, "permanentStaff": true}';
var myObj=JSON.parse(myJson);
console.log("firstName: "+ myObj.firstName);
console.log("lastName: "+ myObj.lastName);
console.log("Salary: "+ myObj.Salary);
console.log("permanentStaff: "+ myObj.permanentStaff);*/

/*var myJson='{"firstName":"John", "lastName":"Stoke", "Salary": 5000, "permanentStaff": true, "Department": {"ID": 3, "Name": "payroll"}}';
var myObj=JSON.parse(myJson);
console.log("firstName: "+ myObj.firstName);
console.log("lastName: "+ myObj.lastName);
console.log("Salary: "+ myObj.Salary);
console.log("permanentStaff: "+ myObj.permanentStaff);
console.log("department id: "+ myObj.Department.ID);
console.log("department name: "+ myObj.Department.Name);*/

var myJson='{"firstName":"John", "lastName":"Stoke", "Salary": 5000, "permanentStaff": true, "Department": {"ID": 3, "Name": "payroll"}, "Skills":[{"id": 1, "value": "HTML"}, {"id": 2, "value": "CSS"}, {"id": 3, "value": "JavaScript"}]}';
var myObj=JSON.parse(myJson);
console.log("firstName: "+ myObj.firstName);
console.log("lastName: "+ myObj.lastName);
console.log("Salary: "+ myObj.Salary);
console.log("permanentStaff: "+ myObj.permanentStaff);
console.log("department id: "+ myObj.Department.ID);
console.log("department name: "+ myObj.Department.Name);
for (let index = 0; index < myObj.Skills.length; index++) {
    console.log("skill "+(index+1)+": "+myObj.Skills[index].id+", "+myObj.Skills[index].value);
}