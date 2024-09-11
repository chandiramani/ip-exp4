// Person Class
class Person {
    constructor(name, mobile) {
        this.name = name;
        this.mobile = mobile;
    }

    displayDetails() {
        console.log(`Name: ${this.name}, Mobile: ${this.mobile}`);
    }

    // Arrow function as a member function
    greet = () => {
        return `Hello, ${this.name}!`;
    }
}

// Student Class (inherits from Person)
class Student extends Person {
    constructor(name, mobile, rollNo) {
        super(name, mobile);
        this.rollNo = rollNo;
    }

    displayDetails() {
        super.displayDetails();
        console.log(`Roll No: ${this.rollNo}`);
    }
}

// Validate form inputs
function validateForm() {
    const mobile = document.getElementById('mobile').value;
    const message = document.getElementById('message').value;

    // Validate mobile number
    if (mobile.length !== 10 || isNaN(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }

    // Validate message length
    if (message.length > 100) {
        alert("Message cannot be more than 100 characters.");
        return false;
    }

    return true;
}

// Process the order
function processOrder() {
    if (!validateForm()) return false;

    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const message = document.getElementById('message').value;

    // Create Person object and display details
    const person = new Person(name, mobile);
    person.displayDetails();

    // Create receipt
    const receipt = document.getElementById('receipt');
    const receiptDetails = document.getElementById('receiptDetails');
    const date = new Date().toLocaleDateString();

    receiptDetails.innerHTML = `
        <strong>Order Confirmation:</strong><br>
        Name: ${person.name}<br>
        Mobile: ${person.mobile}<br>
        Message: ${message}<br>
        Date: ${date}
    `;

    receipt.style.display = 'block';

    // Simulate an exception if rollNo is zero
    try {
        const student = new Student(name, mobile, 0);
        if (student.rollNo === 0) {
            throw new Error("Roll number cannot be zero.");
        }
        student.displayDetails();
    } catch (error) {
        alert(`Error: ${error.message}`);
    }

    return false; // Prevent form submission
}
