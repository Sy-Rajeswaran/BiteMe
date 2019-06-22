function goToRestaurants() {
    location.replace("http://localhost:5500/restaurants/ListOfRestaurants.html");
}

function changeDropdownText(cityText) {
    document.querySelector(".dropdown_hover").innerHTML= cityText;
}