let sidebarmenu = document.getElementById("sidebarmenu");
let hamflag = 0;
document.getElementById("hammenu").addEventListener("click", () => {
  sidebarmenu.style.right = "0px";
  sidebarmenu.style.opacity = "1";
});
document.getElementById("closeham").addEventListener("click", () => {
  sidebarmenu.style.right = "-100%";
  sidebarmenu.style.opacity = "0";
});
