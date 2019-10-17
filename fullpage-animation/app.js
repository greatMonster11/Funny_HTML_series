new fullpage("#fullpage", {
  licenseKey: "GPLv3",
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    // console.log(section);
    const title = section.querySelector("h1");
    const tl = new TimelineMax({ delay: 0.5 });
    tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });

    if (destination.index === 1) {
      const chairs = document.querySelectorAll(".chair");
      const description = document.querySelectorAll(".description");

      tl.fromTo(chairs, 0.7, { x: "100%" }, { x: "-35%" })
        .fromTo(chairs[0], 1, { opacity: 0 }, { opacity: 1 })
        .fromTo(chairs[1], 1, { opacity: 0 }, { opacity: 1 })
        .fromTo(chairs[2], 1, { opacity: 0 }, { opacity: 1 });
    }
  }
});
