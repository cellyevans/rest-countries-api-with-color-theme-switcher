const container = document.querySelector(".main-container");
const regions = document.querySelector(".region-dropdown");

document.addEventListener("DOMContentLoaded", () =>{
    getAllCountries();

    regions.addEventListener("click", e => {
       if(e.target.matches(".region")) {
        getCountriesByRegion(e.target.textContent);
       }
    })

})

async function getAllCountries() {
    try {
        const response= await fetch("https://restcountries.com/v3.1/all");
        const result= await response.json();
        result.forEach(country => getCountriesElement(country));
    } catch (error) {
        console.log(error);
    }
}

async function getCountriesByRegion(region) {
    try {
        container.innerHTML = "";
        const response= await fetch(`https://restcountries.com/v3.1/region/${region}`);
        const result= await response.json();
        result.forEach(country => getCountriesElement(country));
    } catch (error) {
        console.log(error);
    }
}

function getCountriesElement(country) {
   const figure =document.createElement ("figure");
    figure.className = "country";

   const allcontainer= `
          <div class="country-flag">
            <img
              src=${country.flags.png}
              alt=${country.name.common}
              width="200"
              height="120"
            />
          </div>
        <figcaption class="country-desc">
            <h3 class="country-name">${country.name.common}</h3>
            <div class="details">
              <p class="population">Population: ${country.population}</p>
              <p class="country-region">Region: ${country.region}</p>
              <p class="capital">Capital: ${country.capital ?? ""}</p>
            </div>
        </figcaption>
    `;

    figure.innerHTML = allcontainer;

    container.appendChild(figure);
}  