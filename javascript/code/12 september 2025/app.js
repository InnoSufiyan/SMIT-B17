// for loop        -->> i -->>> index --->>> idx

//variable declare and initialize, condition, inc/dec

// for (var sufiyan = 0; sufiyan < 10; sufiyan++) {
//   console.log("salaam");
// }

var resturantMenu = ["Biryani", "Karahi", "Korma", "Tikka", "Behari Boti"];

var customerDemand = prompt("What you want to eat??");

for (let i = 0; i < resturantMenu.length; i++) {
  if (customerDemand === resturantMenu[i]) {
    document.writeln("Your food is available");
  }
}
