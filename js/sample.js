let hamburg1 = document.querySelector(".header_hamburg");
let data = document.querySelector(".sidebar")
hamburg1.addEventListener("click", () => {
    data.classList.toggle("showHamburg");
  
    // console.log(data)
   
    if (data.classList.contains("showHamburg")) {
        document.getElementById("header_menu_bar").src = "../images/remove.png"; // Change to xmark icon
    } else {
        document.getElementById("header_menu_bar").src = "../images/menu.png"; // Change to bars icon
    }
})


                                // sticky header
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



let hamburg2 = document.querySelector(".s_hamburg");
hamburg2.addEventListener("click", () => {
    data.classList.toggle("showHamburg");
  
    // console.log(data)
   
    if (data.classList.contains("showHamburg")) {
        document.getElementById("s_menu_bar").src = "../images/remove.png"; // Change to xmark icon
    } else {
        document.getElementById("s_menu_bar").src = "../images/menu.png"; // Change to bars icon
    }
})
