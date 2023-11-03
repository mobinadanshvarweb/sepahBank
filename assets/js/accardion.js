let _divs = document.querySelectorAll(
  "main > section:nth-of-type(4) > #accardion > div > div > p:nth-of-type(1)"
);



_divs.forEach((i) => {
  i.setAttribute("data-ac", "off");
  i.addEventListener("click", () => {
    _divs.forEach((k) => {
      k.nextElementSibling.style.display = "none";
    });
    if(i.getAttribute('data-ac') == 'off'){
      i.nextElementSibling.style.display = "flex";
      i.style.padding = "15px";
      i.nextElementSibling.style.borderRight = "3px solid #FF6006";
      i.setAttribute("data-ac", "on");
    }else{
      i.setAttribute("data-ac", "off");
      i.nextElementSibling.style.display = "none";
    }

   
    //   i.nextElementSibling.style.display = "none";
  
    
   
  });
});
