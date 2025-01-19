let sticky_header = document.querySelector(".s-header-main");
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  if (window.scrollY === 0) {
    // Hide the header when at the very top of the page
    sticky_header.classList.remove('show_header');
  }

  if (currentScrollY > 300 && currentScrollY > lastScrollY) {
    // show the header when scrolling down
    sticky_header.classList.add("show_header");
  }

  lastScrollY = currentScrollY;
});



