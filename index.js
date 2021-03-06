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

const leastFavoriteCustomer = 'jim';

function changeLeastFavoriteCustomer() {
  // cannot reassign because the variable was set a constant
  leastFavoriteCustomer = 'not jim';
}

function attemptTwoFavoriteCustomers() {
  // will not work because using let ensures you cannot declare the same variable name twice
  let favoriteCustomer = 'betty';
  let favoriteCustomer = 'jiro';
}
