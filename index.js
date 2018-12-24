var customerName = 'bob'; // Do NOT use var normally

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob'; // NEVER declare a variable like this because it becomes global!
}

function overWriteBestCustomer() {
  bestCustomer = 'michelle';
}
