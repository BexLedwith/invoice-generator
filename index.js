const themeToggle = document.getElementById("toggle");
const body = document.getElementById("body");
const car = document.getElementById("car");
const lawn = document.getElementById("lawn");
const weeds = document.getElementById("weeds");

const servicesArr = [];

// toggle dark mode
themeToggle.addEventListener("click", function () {
  body.classList.contains("dark")
    ? body.classList.remove("dark")
    : body.classList.add("dark");
});

// add services to array
const addServices = (service) => {
  servicesArr.push(service);
};

car.addEventListener("click", function () {
  addServices("car");
  console.log(servicesArr);
});
