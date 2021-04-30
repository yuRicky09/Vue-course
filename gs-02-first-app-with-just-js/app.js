// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);

const inputEl = document.querySelector("#goal");
const btnEl = document.querySelector("button");
const ulEl = document.querySelector("ul");

const addGoal = function () {
  const inputValue = inputEl.value;
  const liEl = document.createElement("li");
  liEl.textContent = inputValue;
  ulEl.appendChild(liEl);
  inputEl.value = "";
};

btnEl.addEventListener("click", addGoal);
