let employee = ["Hal Mortimer 12345", "Larry Gordon 54321", "Mary Butterworth 56789", "Jay Boyd 54987", "Carl Acheson 75395"];
let firstName;
let lastName;
let empID;
let firstNameLtr;
let lastNameGrp;
let digitsID;
let empEmail;

const getData = function(empInfo) {
    let indexA = empInfo.indexOf(" ");
    let indexB = empInfo.lastIndexOf(" ");
    firstName = empInfo.slice(0, indexA);
    lastName = empInfo.slice(indexA + 1, indexB);
    empID = empInfo.slice(indexB + 1, empInfo.length);
    console.log(`get data: first name: ${firstName}, last name: ${lastName}, id: ${empID}`);
} 
const chopData = function() {
    firstNameLtr = firstName.substring(0, 1).toLowerCase();
    lastNameGrp = lastName.substring(0, 7).toLowerCase();
    digitsID = empID.substring(0, 2);
    console.log(`chop it: first name letter: ${firstNameLtr}, last name group: ${lastNameGrp}, id digits: ${digitsID}`);
};
const generateEmail = function(empInfo) {
    console.log(`\ndata to process: ${empInfo}`);
    getData(empInfo);
    chopData();
    empEmail = lastNameGrp + firstNameLtr + digitsID + '@company.com';
    console.log(`email: ${empEmail}`);
};

console.log('Generating email addresses');
employee.forEach(generateEmail);
