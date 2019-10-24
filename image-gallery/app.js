function imageGallery() {
  const highlight = document.getElementsByClassName("gallery-highlight");
  const previews = document.querySelectorAll(".room-preview img");

  previews.forEach(preview => {
    preview.addEventListener("click", function() {
      // console.log(preview);
      const smallSrc = this.src;
      const bigSrc = smallSrc.replace("small", "big");

      // Update big imgae :D
      highlight.src = bigSrc;

      // update preview image opacity
      previews.forEach(preview => preview.classList.remove("room-active"));
      preview.classList.add("room-active");
    });
  });
}

imageGallery();
