let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
let runnersAge = 54;
if (registeredEarly && runnersAge > 18) {
  raceNumber += 1000;
}
if (registeredEarly && runnersAge > 18) {
  console.log(
    `Your Race Starts: 9:30 am and your race number is ${raceNumber}`
  );
} else if (!registeredEarly && runnersAge > 18) {
  console.log(
    `Your Race Starts: 11:00 am and your race number is ${raceNumber}`
  );
}
if (runnersAge < 18) {
  console.log(
    `Your Race Starts: 12:30 pm and your race number is ${raceNumber}`
  );
} else {
  console.log(`You need to see the registration desk`);
}
