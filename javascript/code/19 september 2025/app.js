// let arr = [0, 1, 2, 3];
//             //  4 < 4
// for (let i = 0; i <= arr.length; i++) {
//   console.log(i);
// }
// // 0 1 2 3

// let arr = ["samsung", "nokia", "motorolla", "iphone"];

// var userDemand = prompt("Haan dost kya chahiye??");
// var developerJob = false;
// for (var i = 0; i < arr.length; i++) {
//   if (userDemand == arr[i]) {
//     developerJob = true;
//     alert("Haan dost yeh brand hamarey pass mojood hai");
//     // break;
//   }
// }

// if(developerJob == false) {
//     alert("aap k matlab ka brand hamarey pass available nahin")
// }

// var resturantMenu = ["Biryani", "Korma", "Karahi"];

// var categories = ["Chicken", "Beef", "Mutton"];

// var hamaraMenu = [];

// for (i = 0; i < resturantMenu.length; i++) {
//   //   console.log(resturantMenu[i]); //Biryani //Korma //Karahi
//   for (j = 0; j < categories.length; j++) {
//     hamaraMenu.push(categories[j] + " " + resturantMenu[i]); //Chicken //Beef //Mutton
//   }
// }

var resturantMenu = [
  { name: "Biryani", stock: 5, price: 250 },
  { name: "Korma", stock: 2, price: 350 },
  { name: "Karahi", stock: 5, price: 350 },
  { name: "Tikka", stock: 1, price: 250 },
  { name: "Zinger Burger", stock: 7, price: 350 },
  { name: "Malai Boti", stock: 10, price: 250 },
];

var userDemand = prompt("Jee dost kya khaogey??");

for (let i = 0; i < resturantMenu.length; i++) {
  if (resturantMenu[i].stock == 0) {
    continue;
  }

  if (resturantMenu[i].price > 300) {
    continue;
  }

  if (userDemand == resturantMenu[i].name) {
    console.log(
      "Jee haan aap ka " + resturantMenu[i].name + " item available hai"
    );
  }
}
