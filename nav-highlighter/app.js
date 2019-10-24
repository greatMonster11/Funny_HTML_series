function santasNav() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  sections.forEach(section => {
    section.addEventListener("mouseenter", function() {
      console.log(this);
    });
  });
}

santasNav();
