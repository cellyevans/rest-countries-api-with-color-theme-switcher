const goBack = document.querySelector(".back");

document.addEventListener("DOMContentLoaded", () => {


goBack.addEventListener("click", (e)=>{

    e.preventDefault();
    window.location.href="/index.html";
})
});