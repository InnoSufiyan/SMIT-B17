console.log("====>> Salaam");

// var resturantMenu = ["Biryani", "Korma", "Karahi", "Tikka", "Chinese"];

// var demand = prompt("Haan dost kya khaogey ??");

// var kyaFoodMila = false;   //flag

// for (var i = 0; i < 500; i++) {
//   if (demand == resturantMenu[i]) {
//     document.writeln("Jee aap ka food available hai");
//     kyaFoodMila = true;
//     break;
//   }
// }

// if(kyaFoodMila == false) {
//     document.writeln("Sorry aap ka food available nai hai");
// }

// var mobilePhone = ["Samsung", "iPhone", "OnePlus", "QMobile", "Nokia"];

// var userDemand = prompt("Konsey Brand ka phone ap ko chahiye??");

// var userKaBrandMila = false;

// for (var i = 0; i < mobilePhone.length; i++) {
//   console.log(mobilePhone[i]);

//   if (userDemand == mobilePhone[i]) {
//     document.writeln("Jee haan dost, yeh brand hamarey pass available hai");
//     userKaBrandMila = true;
//   }
// }

// if (userKaBrandMila == false) {
//   document.writeln("Sorry dost yeh brand available nai hai");
// }

var smitCourses = ["web development", "ui ux", "animation", "design"];

var candidate = prompt("Jee dost, konsa course karna hai??");

var candidateCourse = false;

for (i = 0; i < smitCourses.length; i++) {
  if (candidate == smitCourses[i]) {
    document.writeln("Jee haan bas yeh course next month se shuru hai..");
    candidateCourse = true;
  }
}

if (candidateCourse == false) {
  document.writeln("Sorry dost yeh course hum nahin karwatey");
}
