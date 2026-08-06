console.log("scripts.js loaded!");

function toggleCaption(img) {
  const caption = img.nextElementSibling;
  caption.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("welcome-modal");
  var btn = document.getElementById("continue-btn");

  console.log("modal:", modal);
  console.log("btn:", btn);

  if (modal && btn) {
    modal.classList.remove("hidden");
    btn.addEventListener("click", function() {
      modal.classList.add("hidden");
    });
  }
});
