//* CREATING JSON FILE

const fs = require("fs");
const employees = [];

employees.push({
  name: "Mark",
  salary: 1000,
  id: 1001,
});

const anthony = {
  name: "Anthony",
  salary: 2000,
  id: 1002,
};

employees.push(anthony);

employees.push({
  name: "Joichiro",
  salary: 5000,
  id: 1003,
});

fs.writeFileSync("jsondata.json", JSON.stringify(employees));

// console.log(employees);
