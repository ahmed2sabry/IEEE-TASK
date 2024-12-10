const inputBox = document.querySelector(".addtask__input");
const listContainer = document.querySelector(".list-container");
const button = document.querySelector(".addtask__button");

const addTask = () => {
  if (inputBox.value === "") {
    alert("please write the task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  setData();
};

button.addEventListener("click", function () {
  addTask();
});

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    setData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    setData();
  }
});

function setData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function getData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

getData();
