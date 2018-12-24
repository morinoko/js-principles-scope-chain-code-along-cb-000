var customerName = 'bob'; // Do NOT use var normally

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  // NEVER declare a variable like this because it becomes global! (see next function)
  bestCustomer = 'not bob';
}

function overWriteBestCustomer() {
  // overwrites the bestCustomer variable from above because it had been set as a global variable
  bestCustomer = 'maybe bob';
}


