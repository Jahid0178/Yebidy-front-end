const body = document.body;
const toggleBtn = document.getElementById("toggle-btn");
const drawer = document.getElementById("drawer");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("active-drawer");
});
