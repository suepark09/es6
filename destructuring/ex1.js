let object = {
    name: "Drake",
    company: "Salesforce",
    occupation: "Engineer",
    age: 26,
    isPresent: true
}

// Using destructuring, and in one line of code, 
//  create 3 variables that extract the name, occupation, and age

let { name, occupation, age } = object;

name === "Drake";
occupation === "Engineer"
age === 26;