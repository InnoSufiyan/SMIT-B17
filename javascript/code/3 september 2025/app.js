const student = {
  name: "sufiyan",
};

console.log(student);

function signup() {
  //userName se data le kar aaogey
  const userName = document.getElementById("userName");
  //firstName se data le kar aaogey
  const firstName = document.getElementById("firstName");
  //lastName se data le kar aaogey
  const lastName = document.getElementById("lastName");
  //email se data le kar aaogey
  const email = document.getElementById("email");
  //password se data le kar aaogey
  const password = document.getElementById("password");
  //cPassword se data le kar aaogey
  const cPassword = document.getElementById("cPassword");
  // hum check karengey k user ney kuch khaali to nahin chor diya
  if (
    !userName.value ||
    !firstName.value ||
    !lastName.value ||
    !email.value ||
    !password.value ||
    !cPassword.value
  ) {
    alert("Bhai tamam fields are required");
    return;
  }
  // password and cpassword same hai ya nahin
  if (password.value != cPassword.value) {
    alert("password and confirm password are not same");
    return;
  }
  // phir humain data , backend ko bhejna hai, aur user ko bolna hai, registered successfully
  alert("Registeration successfully");

  const userData = {
    userName: userName.value,
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    cPassword: cPassword.value,
  };

  console.log(userData, "====>> userData");
}
