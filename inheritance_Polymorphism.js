// Inheritance Definition: 
    // Inheritance is a mechanism 
    // that allows a new class (child class or derived class) to inherit properties and methods from an existing class (parent class or base class).

//Polymorphism Definition: 
     // Polymorphism (meaning "many forms") is the ability of an object or method to take on many forms or to behave differently 
     // depending on the context in which it is used.


//Base Class
class Complaint {
  #complaintId;

  constructor(id, user, description) {
    this.#complaintId = id;
    this.user = user;
    this.description = description;
    this._status = "Pending";
  }

  generateReport() {
    return `Complaint Report: ID=${this.#complaintId}, User=${
      this.user
    }, Status=${this._status}`;
  }
}

// -------------------------------------------------------------------------

// Sub Class -> Inheritanced Class

// DistrictComplaint extends Complaint
class DistrictComplaint extends Complaint {
  constructor(id, user, description, district) {
    super(id, user, description); // reuse base constructor
    this.district = district;
  }

  // Override (Polymorphism)
  generateReport() {
    return `District Complaint Report: District=${this.district}, User=${this.user}, Status=${this._status}`;
  }
}

// --------------------------------------------------------

// StateComplaint extends Complaint
class StateComplaint extends Complaint {
  constructor(id, user, description, state) {
    super(id, user, description);
    this.state = state;
  }

  // Override (Polymorphism)
  generateReport() {
    return `State Complaint Report: State=${this.state}, Complaint by ${this.user}, Status=${this._status}`;
  }
}

//--------------------------------------------------------------------------------

// Base class usage

const complaint1 = new Complaint(101, "Karthick", "Streetlight not working");

console.log(complaint1.generateReport()); // Complaint Report: ID=101, User=Karthick, Status=Pending

// District subclass usage
const districtComplaint = new DistrictComplaint(
  102,
  "Priya",
  "Water leakage",
  "Chennai"
);

console.log(districtComplaint.generateReport()); // District Complaint Report: District=Chennai, User=Priya, Status=Pending

// State subclass usage
const stateComplaint = new StateComplaint(
  103,
  "Arun",
  "Road damage",
  "Tamil Nadu"
);

console.log(stateComplaint.generateReport()); // State Complaint Report: State=Tamil Nadu, Complaint by Arun, Status=Pending
