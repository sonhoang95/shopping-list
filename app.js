const groceryListItems = document.querySelector("#grocery-list ul");
const addItemForm = document.getElementById("add-item");

groceryListItems.addEventListener("click", remove);

// Delete Items
function remove(e) {
  let target = e.target;
  if (target.matches(".delete")) {
    let listItem = target.parentElement;
    listItem.remove();
  }
}

// Add Items
addItemForm.addEventListener("submit", e => {
  e.preventDefault();
  //  let userInputText = addItemForm.querySelector('input').value
  let userInputText = e.target.children[0];

  //Creating the li items dynamically
  const newListItem = document.createElement("li");
  const newGroceryItem = document.createElement("span");
  const deleteBtn = document.createElement("span");

  newListItem.appendChild(newGroceryItem);
  newListItem.appendChild(deleteBtn);

  groceryListItems.appendChild(newListItem);

  newGroceryItem.textContent = userInputText.value;
  deleteBtn.textContent = "Delete";

  newGroceryItem.classList.add("item");
  deleteBtn.classList.add("delete");

  document.forms[1].reset();
});

//Hide Items
const hideBtn = document.querySelector(".hide");

hideBtn.addEventListener("click", e => {
  e.preventDefault();
  let groceryList = document.getElementById("grocery-list");
  groceryList.classList.toggle("hidden");
  if (groceryList.matches(".hidden")) {
    hideBtn.textContent = "Show List";
  } else {
    hideBtn.textContent = "Hide List";
  }
});

//Search for Items
const searchForm = document.getElementById("search-item");
const searchField = searchForm.querySelector("input");

searchField.addEventListener("keyup", e => {
  let searchInput = e.target.value.toLowerCase();
  //grab each li tag to compare inputs
  let groceries = groceryListItems.querySelectorAll("li");
  groceries.forEach(grocery => {
    let groceryName = grocery.firstElementChild.textContent;
    let groceryNameLower = groceryName.toLowerCase();
    if (!groceryNameLower.includes(searchInput)) {
      grocery.style.display = "none";
    } else {
      grocery.style.display = "flex";
    }
  });
  console.log(filtered);
});

//Tabs
const headings = document.querySelector(".heading");
const panels = document.querySelectorAll(".panel");

let selectedPanel = null;

headings.addEventListener("click", e => {
  let target = e.target;
  let dataAttribute = target.dataset.clicked;

  if (target.tagName == "LI") {
    if (selectedPanel !== null) {
      selectedPanel.classList.toggle("selected");
    }
    selectedPanel = target;
    selectedPanel.classList.toggle("selected");

    let targetPanel = document.querySelector(dataAttribute);
    panels.forEach(panel => {
      if (panel === targetPanel) panel.classList.toggle("active");
    });
  }
});

//answer button
let answerButton = document.getElementById("show-answer");
answerButton.addEventListener("click", answer);

function answer(e) {
  document.getElementById("answer").classList.add("show");
  document.getElementById("answer").textContent = "AN IMPASTAAA!!!";
  answerButton.style.display = "none";
}
