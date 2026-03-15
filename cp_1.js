// Selecting elements from the DOM
const inputForm = document.getElementById("inputForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const commentsInput = document.getElementById("comments");
const charCount = document.getElementById("charCount");
const feedbackDisplay = document.getElementById("feedback-display");
const tooltip = document.getElementById("tooltip");
const page = document.getElementById("page");

// Event bubbling + stopPropagation
page.addEventListener("click", function (event) {
  event.stopPropagation();
});

document.body.addEventListener("click", function () {
  console.log("Background clicked");
});

// Event delegation for input and keyboard events
inputForm.addEventListener("input", function (event) {
  if (event.target.id === "comments") {
    charCount.textContent = "Character Count: " + event.target.value.length;
  }

  if (event.target.id === "name") {
    document.getElementById("nameError").textContent = "";
  }

  if (event.target.id === "email") {
    document.getElementById("emailError").textContent = "";
  }

  if (event.target.id === "comments") {
    document.getElementById("commentsError").textContent = "";
  }
});

// Keyboard event
commentsInput.addEventListener("keydown", function () {
  charCount.textContent = "Character Count: " + commentsInput.value.length;
});

// Mouseover event for tooltip
inputForm.addEventListener("mouseover", function (event) {
  if (event.target.matches("input, textarea")) {
    tooltip.style.display = "block";
    tooltip.textContent = event.target.dataset.tooltip;
    tooltip.style.left = event.pageX + 10 + "px";
    tooltip.style.top = event.pageY + 10 + "px";
  }
});

// Mousemove event for tooltip position
inputForm.addEventListener("mousemove", function (event) {
  if (event.target.matches("input, textarea")) {
    tooltip.style.left = event.pageX + 10 + "px";
    tooltip.style.top = event.pageY + 10 + "px";
  }
});

// Mouseout event for hiding tooltip
inputForm.addEventListener("mouseout", function (event) {
  if (event.target.matches("input, textarea")) {
    tooltip.style.display = "none";
  }
});

// Submit event
inputForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Clear old errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("commentsError").textContent = "";

  let isValid = true;

  if (nameInput.value.trim() === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  if (emailInput.value.trim() === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  }

  if (commentsInput.value.trim() === "") {
    document.getElementById("commentsError").textContent = "Comments are required.";
    isValid = false;
  }

  if (isValid === false) {
    return;
  }

  // Dynamically create feedback entry
  let entry = document.createElement("div");
  entry.classList.add("entry");

  let userName = document.createElement("h3");
  userName.textContent = nameInput.value;

  let userEmail = document.createElement("p");
  userEmail.textContent = "Email: " + emailInput.value;

  let userComments = document.createElement("p");
  userComments.textContent = "Comments: " + commentsInput.value;

  entry.appendChild(userName);
  entry.appendChild(userEmail);
  entry.appendChild(userComments);

  document.getElementById("feedback-display").appendChild(entry);

  // Reset form
  inputForm.reset();
  charCount.textContent = "Character Count: 0";
});