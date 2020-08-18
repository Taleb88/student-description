let student = {
    firstName: "Taleb",
    lastName: "Damaree",
    age: "Confidential",
    height: "Confidential",
    weight: "Confidential",
    personalInfo: function() {
        return `<b>First Name:</b> ${this.firstName} <br> 
                <b>Last Name:</b> ${this.lastName} <br> 
                <b>Height:</b> ${this.height} <br> 
                <b>Weight:</b> ${this.weight}`;
    }
};

student.scholarship = true;
student.grade = 'Pass';
console.log(student);

document.getElementById('description').innerHTML = student.personalInfo();