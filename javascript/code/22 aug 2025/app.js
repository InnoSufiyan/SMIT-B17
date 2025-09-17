var ammiDinner = prompt("Ammi aap khaaney main kya khaeyngi??");
// chicken = 200, beef = 250, mutton = 350
var wallet = 450;
if (
  ammiDinner == "chicken biryani" ||
  ammiDinner == "beef biryani" ||
  ammiDinner == "mutton biryani"
) {
  if (ammiDinner == "mutton biryani" && wallet >= 350) {
    console.log("Mutton Biryani");
  } else if (wallet < 350 && wallet >= 250) {
    console.log("beef biryani");
  } else if (wallet >= 200 && wallet < 250) {
    console.log("chicken biryani");
  } else {
    console.log("sorry ammi.... pesay nahin they... baad main laata hun");
  }
} else if (
  ammiDinner == "chicken tikka" ||
  ammiDinner == "bihari tikka" ||
  ammiDinner == "kabab"
) {
  console.log(
    "hum jaeyngey tikkay waley ki dukaan per aur tikka ya kabab le kar ghar nikal jaeyngey"
  );
} else {
  console.log(
    "Ammi ney jo mangwaya woh humain na mila, to hum aesay hi ghar aagaey"
  );
}

// var isBlind = prompt("Bhai aap andhay to nahin hain??");
// var age = prompt("Bhai aap ki age kya hai??");

// if (isBlind == "No" && +age >= 18) {
//   console.log("Aap ka license ban gaya");
// } else if (isBlind == "Yes") {
//   console.log("Sorry brother blind logon ka license nahin ban sakta");
// } else if (age < 18) {
//   console.log("Bachay pehley barey ho kar aao");
// }

// var userEmail = "innosufiyan@gmail.com";
// var userPassword = "123456";
// // login page

// var email = prompt("Write your email address");
// var password = prompt("Write your password");

// if (email == userEmail && password == userPassword) {
//   console.log("bhaiyya mubarak ho, login hogaey ho.... chill karo");
// } else if (email != userEmail) {
//   console.log("Sorry dear this email doesn't have any account..");
// } else {
//   console.log("password is incorrect, please try again");
// }

// condition -->> true -->> execution
// condition -->> false -->> second execution

// if -> else if -> else if -> else if -> else if -->>>>>> else
