console.log("script.js is connected");

function handleRSVP() {
  const message = document.createElement("p");
  message.textContent = "You're on the list — see you there!";
  message.classList.add("feedback-message");

  const rsvpButton = document.getElementById("rsvpBtn");
  rsvpButton.after(message);
}