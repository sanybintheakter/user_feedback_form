const inputForm = document.getElementById("inputForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const commentsInput = document.getElementById("comments");
const charCount = document.getElementById("charCount");
const feedbackDisplay = document.getElementById("feedback-display");
const tooltip = document.getElementById("tooltip");
const page = document.getElementById("page");

page.addEventListener("click", function (event) 
{
  event.stopPropagation();
});

document.body.addEventListener("click", function () 
{
  console.log("Background clicked");
});

inputForm.addEventListener("input", function (event) 
{
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

commentsInput.addEventListener("keydown", function () 
{
  charCount.textContent = "Character Count: " + commentsInput.value.length;
});

inputForm.addEventListener("mouseover", function (event) 
{
  if (event.target.matches("input, textarea")) {
    tooltip.style.display = "block";
    tooltip.textContent = event.target.dataset.tooltip;
    tooltip.style.left = event.pageX + 10 + "px";
    tooltip.style.top = event.pageY + 10 + "px";
  }
});

inputForm.addEventListener("mousemove", function (event) 
{
  if (event.target.matches("input, textarea")) {
    tooltip.style.left = event.pageX + 10 + "px";
    tooltip.style.top = event.pageY + 10 + "px";
  }
});

inputForm.addEventListener("mouseout", function (event) 
{
  if (event.target.matches("input, textarea")) {
    tooltip.style.display = "none";
  }
});

inputForm.addEventListener("submit", function (event) 
{
  event.preventDefault();

document.getElementById("nameError").textContent = "";
document.getElementById("emailError").textContent = "";
document.getElementById("commentsError").textContent = "";

let isValid = true;

if (nameInput.value.trim() === "") 
  {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

if (emailInput.value.trim() === "") 
  {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  }

if (commentsInput.value.trim() === "") 
  {
    document.getElementById("commentsError").textContent = "Comments are required.";
    isValid = false;
  }

if (isValid === false) 
  {
    return;
  }

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

  inputForm.reset();
  charCount.textContent = "Character Count: 0";
});