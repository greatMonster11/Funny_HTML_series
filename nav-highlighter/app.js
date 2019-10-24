function santasNav() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  sections.forEach(section => {
    section.addEventListener("mouseenter", function() {
      // console.log(this);
      const id = this.getAttribute("id");
      // console.log(id);
      const navActive = document.querySelector(`a[href="#${id}"]`);
      // console.log(navActive);
      navLinks.forEach(link => link.classList.remove("active"));
      navActive.classList.add("active");
    });
  });
}

santasNav();
