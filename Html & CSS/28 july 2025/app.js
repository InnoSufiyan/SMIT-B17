const themeBtn = document.getElementById("themeBtn");
console.log(themeBtn, "===>> themeBtn");

themeBtn.addEventListener("click", () => {
  console.log("===>> haan bhai saab click huwa");
  if (document.documentElement.hasAttribute("data-theme")) {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
});
