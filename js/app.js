// toggle dropdown
const filter = document.querySelector(".region-container");
const dropdown = document.querySelector(".region-dropdown");
 

filter.addEventListener("click", () =>{
  dropdown.classList.toggle("active")
})

const lightmode =  document.querySelector("toggle-container");
const sunmode = document.querySelector("sun");