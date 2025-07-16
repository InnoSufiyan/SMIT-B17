const element = document.getElementById("twoNew");
const image = document.getElementsByTagName("img");

console.log(element, "===>> element");

const button = document.getElementsByTagName("button");

console.log(button, "===>> button");

button[0].addEventListener("click", () => {
  element.setAttribute("class", "shrink");
  image[0].setAttribute("class", "on");
});
