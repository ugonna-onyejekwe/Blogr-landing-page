let nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  nav.classList.toggle("active", this.window.scrollY > 100);
});

let all_links = document.querySelectorAll(".anchor");
let menu_btn = document.querySelector(".menu_btn");
let navigators = document.querySelector(".navigators");
let overlay = document.querySelector(".overlay");
let li = document.querySelectorAll(".anchor li");

function init_all_links() {
  all_links.forEach((i) => {
    i.classList.remove("active");
  });
}

all_links.forEach((i) => {
  i.onclick = () => {
    if (i.classList.contains("active")) {
      i.classList.remove("active");
    } else {
      init_all_links();
      i.classList.add("active");
    }
  };
});

menu_btn.onclick = () => {
  menu_btn.classList.toggle("active");
  navigators.classList.toggle("active");
  overlay.classList.toggle("active");
};

li.forEach((i) => {
  i.onclick = () => {
    menu_btn.classList.remove("active");
    navigators.classList.remove("active");
    overlay.classList.remove("active");
  };
});

overlay.onclick = () => {
  menu_btn.classList.remove("active");
  navigators.classList.remove("active");
  overlay.classList.remove("active");
};
