let _lis = document.querySelectorAll("#ulsec1 > li");
let _p = document.querySelectorAll("#ulsec1 > li > p");
let _mydivs = document.querySelectorAll("#divsec1 > div");
let data = 0;
_lis.forEach((i, index) => {
  i.addEventListener("click", () => {
    _p.forEach((k) => {
      k.style.color = "#4e5960";
      k.style.borderTop = "3px solid #4e5960";
    });
    i.children[1].style.color = " #ff6006";
    i.children[1].style.borderTop = "3px solid #ff6006";
    data = index;
    i.setAttribute("data-n", data);
    _mydivs.forEach((v) => {
      v.style.opacity = "0";
    });
    console.log(data);
    if (data == 0) {
      document.getElementById("div6").style.opacity = "1";
      console.log("hiiiiiiiii 6");
    } else if (data == 1) {
      document.getElementById("div5").style.opacity = "1";
      console.log("hiiiiiiiii 5");
    } else if (data == 2) {
      document.getElementById("div4").style.opacity = "1";
      console.log("hiiiiiiiii 4");
    } else if (data == 3) {
      document.getElementById("div3").style.opacity = "1";
      console.log("hiiiiiiiii 3");
    } else if (data == 4) {
      document.getElementById("div2").style.opacity = "1";
      console.log("hiiiiiiiii 2");
    } else if (data == 5) {
      document.getElementById("div1").style.opacity = "1";
      console.log("hiiiiiiiii 1");
    }
  });
});
