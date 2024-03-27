// Prompt the user to enter the speed of a car
const speed = prompt("Enter the speed of the car (km/s):");

// Convert the input to a number
const numSpeed = Number.parseInt(speed, 10);

// Calculate the number of demerit points
let points = 0;
if (numSpeed > 70) {
  const excess = numSpeed - 70;
  points = Math.ceil(excess / 5);
}

// Display the number of demerit points or "License suspended"
if (points <= 12) {
  alert("Points: " + points);
} else {
  alert("License suspended");
}