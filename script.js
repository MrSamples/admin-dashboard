const cards = document.querySelectorAll(".card");
const stars = document.querySelectorAll(".star");
const eyes = document.querySelectorAll(".eye");
const bell = document.querySelector(".notif")
const modal = document.querySelector(".modal");
const root = document.querySelector(":root");

for (let i = 0; i < cards.length; i++) {
    stars[i].addEventListener("click", function (e) {
        if (e.target.src.includes("/img/star.svg")) {
            e.target.src = "./img/star-filled.svg";
            cards[i].classList.add("gold");
        }
        else {
            e.target.src = "./img/star.svg";
            cards[i].classList.remove("gold");
        }
    });

    eyes[i].addEventListener("click", function (e) {
        if (e.target.src.includes("/img/eye.svg")) {
            e.target.src = "./img/eye-filled.svg";
            cards[i].classList.add("blue");
        }
        else {
            e.target.src = "./img/eye.svg";
            cards[i].classList.remove("blue");
        }
    });
}

bell.addEventListener("click", function (e) {
    if (e.target.src.includes("/img/bell.svg"))
        e.target.src = "./img/bell-filled.svg";
    else
        e.target.src = "./img/bell.svg";
});

modal.addEventListener("click", function (e) {
    if (e.target.src.includes("/img/sun.svg")) {
        e.target.src = "./img/moon.svg";
        root.style.setProperty("--card-color", "#414952");
        root.style.setProperty("--bg-color", "#21272e");
        root.style.setProperty("--text-color", "#f8f8f0");
        root.style.setProperty("--desc-color", "#e2e8f0");
    }
    else {
        e.target.src = "./img/sun.svg";
        root.style.setProperty("--card-color", "#f8f8f0");
        root.style.setProperty("--bg-color", "#e2e8f0");
        root.style.setProperty("--text-color", "#000000");
        root.style.setProperty("--desc-color", "#4c4e50");
    }
});

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    console.log()
    document.getElementsByClassName("modal")[0].src = "./img/moon.svg";
}
