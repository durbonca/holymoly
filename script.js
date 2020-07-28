var home = document.getElementById("home")
var locations = document.getElementById("locations")
var faq = document.getElementById("faq")

document.getElementById("menu_1").addEventListener("click", function() {
    if ((home.classList.contains("show"))) {
        console.log("do nothing")
    } else {
        console.log("do something")
        home.classList.add("show");
        home.classList.remove("hide");


    }
    /*   home.classList.add("show");
    home.classList.remove("show");
    faq.classList.add("hide");
    faq.classList.remove("hide");
    locations.classList.add("hide");
    locations.classList.remove("hide"); */
})

document.getElementById("menu_2").addEventListener("click", function() {
    if ((locations.classList.contains("show"))) {
        console.log("do nothing")
    } else {
        console.log("do something")
        locations.classList.add("show");
        locations.classList.remove("hide");

    }
    /*   home.classList.add("show");
    home.classList.remove("show");
    faq.classList.add("hide");
    faq.classList.remove("hide");
    locations.classList.add("hide");
    locations.classList.remove("hide"); */
})
document.getElementById("menu_3").addEventListener("click", function() {
    if ((faq.classList.contains("show"))) {
        console.log("do nothing")
    } else {
        console.log("do something")
    }
    /*   home.classList.add("show");
    home.classList.remove("show");
    faq.classList.add("hide");
    faq.classList.remove("hide");
    locations.classList.add("hide");
    locations.classList.remove("hide"); */
})