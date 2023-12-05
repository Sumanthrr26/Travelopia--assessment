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
const hamburger = document.querySelector(".hamburger");
const menu_link = document.querySelector("#links");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu_link.classList.toggle("active");
});
