function start() {
  showDropDownMenu();
}

function clearInputs() {
  const formEl = document.getElementById("contactForm");
  const feedbackEl = document.getElementById("submitResponse");
  const contentFeedback = document.getElementById("contentFeedback");
  formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    formEl.reset();
    
    feedbackEl.style.filter = "opacity(1)";
    contentFeedback.style.filter = "opacity(1)";
    feedbackEl.style.height = "5rem";
    feedbackEl.style.padding = "1rem 2rem";
    setTimeout(() => {
      feedbackEl.style.filter = "opacity(0)";
      feedbackEl.style.height = "0rem";
      contentFeedback.style.filter = "opacity(0)";
      feedbackEl.style.padding = "0rem";
    }, 5000);
  });
}
function showDropDownMenu() {
  const dropBtn = document.getElementById("dropBtn");
  const dropDown = document.getElementById("dropDown");
  const dropDownContent = document.getElementById("dropDownContent");
  dropBtn.addEventListener("mouseenter", () => {
    dropDown.style.height = "14rem";
    dropDown.style.filter = "opacity(1)";
    dropDownContent.style.filter = "opacity(1)";
    dropDown.style.backdropFilter = "blur(10px)";
  });
  dropBtn.addEventListener("mouseleave", () => {
    dropDown.style.height = "0rem";
    dropDown.style.filter = "opacity(0)";
    dropDown.style.backdropFilter = "blur(0)";
    dropDownContent.style.filter = "opacity(0)";
  });
}
start();
