const themeToggle = document.getElementById("toggle");
const body = document.getElementById("body");
const car = document.getElementById("car");
const lawn = document.getElementById("lawn");
const weeds = document.getElementById("weeds");
const taskTable = document.getElementById("task-table");
const totalDisplay = document.getElementById("numberTotal");
const sendInvoice = document.getElementById("sendInvoice");

let servicesArr = [];
let totalSum = 0;

// toggle dark mode
themeToggle.addEventListener("click", function () {
  body.classList.contains("dark")
    ? body.classList.remove("dark")
    : body.classList.add("dark");
});

// add services to array
const addServices = (service) => {
  servicesArr.push(service);

  updateTable(service);
};

const updateTable = (service) => {
  const serviceObj = service;
  const task = serviceObj.task;
  const price = serviceObj.price;
  const id = serviceObj.id;
  const node = document.createElement("tr");
  node.classList.add("taskRow");
  node.setAttribute("id", `${id}`);
  const child = `
        <td class="left">
            <span class="taskSpan">${task}</span> <span class="remove-btn" id="remove-${id}">"Remove"</span>
        </td>
        <td class="right">
            <span class="priceSpan">${price}</span>
        </td>
      `;
  node.innerHTML = child;
  taskTable.appendChild(node);
};

const checkNotes = function () {
  if (document.getElementById("notesText").innerText === "") {
    document.getElementById("notesText").innerText =
      "We accept cash, credit card, or Paypal";
  }
};

const updateTotal = () => {
  totalDisplay.innerHTML = `$${totalSum}`;
};

car.addEventListener("click", function () {
  const washCar = {
    task: "Wash Car",
    price: "$10",
    id: "washCar",
  };
  const numPrice = 10;
  addServices(washCar);
  totalSum += numPrice;
  updateTotal();
  checkNotes();
  car.disabled = true;
  const removeCar = document.getElementById("remove-washCar");
  removeCar.addEventListener("click", function () {
    servicesArr = servicesArr.filter((obj) => !obj.id === "washCar");
    document.getElementById("washCar").outerHTML = "";
    car.disabled = false;
    totalSum -= numPrice;
    updateTotal();
  });
});
lawn.addEventListener("click", function () {
  const mowLawn = {
    task: "Mow Lawn",
    price: "$20",
    id: "mowLawn",
  };
  const numPrice = 20;
  addServices(mowLawn);
  totalSum += numPrice;
  updateTotal();
  checkNotes();
  lawn.disabled = true;
  const removeLawn = document.getElementById("remove-mowLawn");
  removeLawn.addEventListener("click", function () {
    servicesArr = servicesArr.filter((obj) => !obj.id === "mowLawn");
    document.getElementById("mowLawn").outerHTML = "";
    totalSum -= numPrice;
    updateTotal();
    lawn.disabled = false;
  });
});
weeds.addEventListener("click", function () {
  const pullWeeds = {
    task: "Pull Weeds",
    price: "$30",
    id: "pullWeeds",
  };
  const numPrice = 30;
  addServices(pullWeeds);
  totalSum += numPrice;
  updateTotal();
  checkNotes();
  weeds.disabled = true;
  const removeWeeds = document.getElementById("remove-pullWeeds");
  removeWeeds.addEventListener("click", function () {
    servicesArr = servicesArr.filter((obj) => !obj.id === "pullWeeds");
    document.getElementById("pullWeeds").outerHTML = "";
    totalSum -= 30;
    updateTotal();
    weeds.disabled = false;
  });
});

// send invoice

sendInvoice.addEventListener("click", function () {
  servicesArr = [];
  if (document.getElementById("washCar")) {
    document.getElementById("washCar").outerHTML = "";
  }
  if (document.getElementById("mowLawn")) {
    document.getElementById("mowLawn").outerHTML = "";
  }
  if (document.getElementById("pullWeeds")) {
    document.getElementById("pullWeeds").outerHTML = "";
  }
  totalSum = 0;
  updateTotal();
  car.disabled = false;
  lawn.disabled = false;
  weeds.disabled = false;
});
