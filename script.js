var NoOfCountries = document.querySelectorAll(".country").length;  //country
for(var i = 0; i < NoOfCountries; i++) {
    let currentCountry = document.querySelectorAll(".country")[i];
    currentCountry.addEventListener("mouseenter", handleMouseEnter);
    currentCountry.addEventListener("mouseleave", handleMouseExit);
}

//when mouse is over
function handleMouseEnter() {
    this.classList.add("hover");
}

//when mouse is not over
function handleMouseExit(){
    this.classList.remove("hover");
}

var capitals = ['New Delhi', 'Tokyo', 'Moscow', 'Bern', 'Wellington'];
var countryElements = document.querySelectorAll(".country");

for (var i = 0; i < countryElements.length; i++) {
    countryElements[i].addEventListener("click", function() {
        var index = Array.from(countryElements).indexOf(this); // Get the index of the clicked element
        var capital_name = capitals[index];
        document.querySelector("#capital").textContent = `Capital : ` + capital_name;
    });
}

