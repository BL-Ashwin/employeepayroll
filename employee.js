class EmployeePayroll {
    constructor(message) {
        this.message = message; // store the message in a property
    }

    displayMessage() {
        console.log(this.message); // use 'this' to access the message
    }
}

// Create an instance with a message
const employee = new EmployeePayroll("Welcome to employee");

// Call the method to display the message
employee.displayMessage();