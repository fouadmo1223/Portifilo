document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
  });

  // Project Filter Functionality
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll("[data-category]");
  let activeFilter = "all";
  let isAnimating = false;

  // Filter projects function
  function filterProjects(filterValue) {
    if (isAnimating || activeFilter === filterValue) return;
    isAnimating = true;
    activeFilter = filterValue;

    // First fade out all projects
    projectItems.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show");
    });

    // After fade out completes, process filtering
    setTimeout(() => {
      projectItems.forEach((item) => {
        const categories = item.getAttribute("data-category").split(" ");

        if (filterValue === "all" || categories.includes(filterValue)) {
          item.style.display = "block";
          setTimeout(() => {
            item.classList.remove("hide");
            item.classList.add("show");
          }, 50);
        } else {
          item.style.display = "none";
        }
      });

      // Reinitialize AOS after animations complete
      setTimeout(() => {
        AOS.refresh();
        isAnimating = false;
      }, 500);
    }, 500);
  }

  // Add click event to filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Filter projects
      const filterValue = this.getAttribute("data-filter");
      filterProjects(filterValue);
    });
  });

  // Navbar scroll effect (if you have a navbar)
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (navbar && window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else if (navbar) {
      navbar.classList.remove("scrolled");
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Function to open PDF in new tab
  window.openPdfInNewPage = function () {
    window.open("./cv.pdf", "_blank");
  };
});
