const allcontainer=document.querySelector(".All main-container");


document.addEventListener("DOMContentLoaded", () =>{

    allcontainer();

})

async function allcontainer () {
    try {
        const response= await fetch("https://restcountries.com/v3.1/all");
        const result= await response.json();
        result.forEach(all => allcontainer(all));
    } catch (error) {
        
    }
    
}
function allcontainer(all) {
   const countrydes=document.createElement ("country-desc");
   const allcontainer= `
   <div class="main-container">
        <figure class="country">
          <div class="country-flag">
            <img
              src="./image/Belgium.png"
              alt="germany"
              width="200"
              height="120"
            />
          </div>
   <figcaption class="country-desc">
            <h3 class="country-name">${allcontainer.commonname}</h3>
            <div class="details">
              <p class="population">${allcontainer.population}</p>
              <p class="country-region">${allcontainer.region}</p>
              <p class="capital">${allcontainer.capital}</p>
            </div>
        </figcaption>
       </figure>

       `;

      
       
}