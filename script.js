// Toggle Schedule
document.getElementById("toggleSchedule").addEventListener("click", () => {
  const schedule = document.getElementById("schedule");
  schedule.classList.toggle("hidden");
});

// Registration Form
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("formMsg");

  if (name && email) {
    msg.textContent = "🎉 Thank you for registering, " + name + "!";
    msg.style.color = "#34a853"; // green for success
    msg.style.opacity = "1";
    document.getElementById("registerForm").reset();
  } else {
    msg.textContent = "⚠ Please fill all fields.";
    msg.style.color = "#ea4335"; // red for error
    msg.style.opacity = "1";
  }

  // Fade out message after 3 seconds
  setTimeout(() => { msg.style.opacity = "0"; }, 3000);
});

// Scroll Animation (reveal sections)
const sections = document.querySelectorAll("section");
const revealOnScroll = () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
