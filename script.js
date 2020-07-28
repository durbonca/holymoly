var home = document.getElementById("home")
var locations = document.getElementById("locations")
var faq = document.getElementById("faq")

document.getElementById("menu_1").addEventListener("click", function() {
    if (home.classList.contains("show")) {
        console.log("do nothing")
    } else {
        home.classList.add("show");
        home.classList.remove("hide");
        if (faq.classList.contains("show")) {
            faq.classList.add("hide");
            faq.classList.remove("show");
        } else {
            locations.classList.add("hide");
            locations.classList.remove("show");
        }

    }
})

document.getElementById("menu_2").addEventListener("click", function() {
    if (locations.classList.contains("show")) {
        console.log("do nothing")
    } else {
        locations.classList.add("show");
        locations.classList.remove("hide");
        if (home.classList.contains("show")) {
            home.classList.add("hide");
            home.classList.remove("show");
        } else {
            locations.classList.add("hide");
            locations.classList.remove("show");
        }
    }
})
document.getElementById("menu_3").addEventListener("click", function() {
    if (faq.classList.contains("show")) {
        console.log("do nothing")
    } else {
        faq.classList.add("show");
        faq.classList.remove("hide");
        if (home.classList.contains("show")) {
            home.classList.add("hide");
            home.classList.remove("show");
        } else {
            locations.classList.add("hide");
            locations.classList.remove("show");
        }


    }

})