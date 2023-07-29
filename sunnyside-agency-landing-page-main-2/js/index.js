const menu = document.getElementById("menu-mobile");
const sidebar = document.getElementById("mobile-sidebar");
let sidebarOpen = false;

menu.addEventListener("click", (e) => {
  if (sidebarOpen == false) {
    sidebar.style.display = "block";
    sidebarOpen = true;
  } else {
    sidebar.style.display = "none";
    sidebarOpen = false;
  }
});
