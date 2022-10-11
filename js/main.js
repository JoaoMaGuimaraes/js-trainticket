// Ask the user the number of kilometers to travel and the age of the passenger
age = window.prompt("Age of the passenger:", "");
km = window.prompt("Number of kilometers:", "");
age = parseInt(age);
km = parseInt(km);

// Condition to check if age and kms are not Nan
if (!isNaN(age) && !isNaN(km)) {
  // Calculate the total price of the trip:
  //Discount on < 12 yo
  if (age <= 12) {
    totalPrice = km * 0.21 * 0.8;
  }
  // Discount on > 65 yo
  else if (age >= 65) {
    totalPrice = km * 0.21 * 0.6;
  //Normal price
  } else {
    totalPrice = km * 0.21;
  }
  // Output Total Price
  window.alert(`Total Price of the trip: ${totalPrice}`);
} else {
  // age or km invalid (NaN)
  window.alert("the value entered is not a number. Try again");
}
window.location.reload();
