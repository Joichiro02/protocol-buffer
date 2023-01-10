const Schema = require("./employees_pb");
const fs = require("fs");

const mark = new Schema.Employee();
mark.setId(1001);
mark.setName("Mark");
mark.setSalary(10000);

const anthony = new Schema.Employee();
anthony.setId(1002);
anthony.setName("Anthony");
anthony.setSalary(1000);

const joichiro = new Schema.Employee();
joichiro.setId(1003);
joichiro.setName("Joichiro");
joichiro.setSalary(50000);

const employees = new Schema.Employees();
employees.addEmployees(mark);
employees.addEmployees(anthony);
employees.addEmployees(joichiro);

const bytes = employees.serializeBinary(); //* use to convert the array to binary data
fs.writeFileSync("employeesBinary", bytes);
console.log("Binary ", bytes);

const employees2 = Schema.Employees.deserializeBinary(bytes); //* use to convert the binary data to real data
console.log("Data ", employees2.toArray()); //* you can use also the "toString()" method and also the "toObject()" method
