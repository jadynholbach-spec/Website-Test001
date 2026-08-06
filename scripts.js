console.log("scripts.js loaded!");
console.log("modal:", document.getElementById("welcome-modal"));
console.log("btn:", document.getElementById("continue-btn"));

function toggleCaption(img) {
  const caption = img.nextElementSibling;
  caption.classList.toggle('show');
}
document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("welcome-modal");
  var btn = document.getElementById("continue-btn");

  if (modal && btn) {
    modal.classList.remove("hidden");
    btn.addEventListener("click", function() {
      modal.classList.add("hidden");
    });
  }
});
