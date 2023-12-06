const hamburger = document.querySelector(".hamburger");
const nav_menu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav_menu.classList.toggle("active");
});
function toggleText() {
  const limitedText = document.getElementById("limitedText");
  const fullText = document.getElementById("fullText");
  const showMoreBtn = document.getElementById("showMoreBtn");

  if (
    limitedText.style.display === "none" ||
    limitedText.style.display === ""
  ) {
    limitedText.style.display = "block";
    fullText.style.display = "none";
    showMoreBtn.textContent = "Show more";
  } else {
    limitedText.style.display = "none";
    fullText.style.display = "block";
    showMoreBtn.textContent = "Show less";
  }
}
