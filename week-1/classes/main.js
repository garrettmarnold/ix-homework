console.log("test");

// classes

class Person {
  constructor(firstName, lastName, age, address, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }

  getFullName() {
    return `Full name: ${this.firstName} ${this.lastName}`;
  }

  sayHello() {
    return `Good morning, ${this.firstName} ${this.lastName}`;
  }

  addTwoNumbers(num1, num2) {
    return `Result: ${num1 + num2}`;
  }
}

// Inheritance

class Customer extends Person {
  constructor(
    firstName,
    lastName,
    age,
    address,
    phoneNumber,
    dateOfBirth,
    membershipType
  ) {
    super(firstName, lastName, age, address, phoneNumber);
    this.dateOfBirth = dateOfBirth;
    this.membershipType = membershipType;
  }

  // Static

  static getMembershipCost() {
    let cost = 500;
    return `Membership costs $${cost}`;
  }

  getMembershipType() {
    return `${this.membershipType} membership`;
  }
}

const sean = new Customer(
  "Sean",
  "Adams",
  "32",
  "456 Milkyway Way",
  "12345678",
  "01/26/1991",
  "Standard"
);

console.log(sean);
console.log(sean.getMembershipType());
console.log(Customer.getMembershipCost());
console.log(sean.getFullName());

const jenna = new Customer(
  "Jenna",
  "Reed",
  "19",
  "899 Milkyway Way",
  "1234567",
  "05/13/2004",
  "Junior"
);

const nate = new Customer(
  "Nate",
  "Dolton",
  "25",
  "1284 Milkyway Way",
  "1234567",
  "08/11/1998",
  "Platnum"
);

const james = new Customer(
  "James",
  "Cameron",
  "26",
  "Milkway Way",
  "12345",
  "12/05/1997",
  "Standard"
);

let customers = [];

customers.push(james);
customers.push(sean);
customers.push(jenna);
customers.push(nate);

console.log(customers);

class UI {
  constructor() {
    this.tableBody = document.getElementById("table-body");
  }

  renderCustomers() {
    this.tableBody.innerHTML = [];

    for (let i = 0; i < customers.length; i++) {
      const tr = document.createElement("tr");

      let firstName = document.createElement("td");
      let lastName = document.createElement("td");
      let age = document.createElement("td");
      let address = document.createElement("td");
      let phoneNumber = document.createElement("td");
      let dateOfBirth = document.createElement("td");
      let membershipType = document.createElement("td");

      firstName.innerHTML = customers[i].firstName;
      lastName.innerHTML = customers[i].lastName;
      age.innerHTML = customers[i].age;
      address.innerHTML = customers[i].address;
      phoneNumber.innerHTML = customers[i].phoneNumber;
      dateOfBirth.innerHTML = customers[i].dateOfBirth;
      membershipType.innerHTML = customers[i].membershipType;

      tr.appendChild(firstName);
      tr.appendChild(lastName);
      tr.appendChild(age);
      tr.appendChild(address);
      tr.appendChild(phoneNumber);
      tr.appendChild(dateOfBirth);
      tr.appendChild(membershipType);

      this.tableBody.appendChild(tr);
    }
  }
}

const ui = new UI();
ui.renderCustomers();
