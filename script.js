document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".gallery img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxDate = document.getElementById("lightbox-date");
  const lightboxCaption = document.getElementById("lightbox-caption");

  images.forEach((img) => {
    img.addEventListener("click", function () {
      lightbox.style.display = "flex";
      lightboxImg.src = this.src;
      lightboxDate.textContent = "Tarih: " + this.dataset.date;
      lightboxCaption.textContent = this.dataset.caption;
    });
  });

  lightbox.addEventListener("click", function (event) {
    if (event.target !== lightboxImg) {
      closeLightbox();
    }
  });
});

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function showNote() {
  document.getElementById("notePopup").style.display = "flex";
}

// Not penceresi kapatma
function closeNote() {
  document.getElementById("notePopup").style.display = "none";
}
