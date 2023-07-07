const cards = document.querySelectorAll(".card");
const stars = document.querySelectorAll(".star");
const eyes = document.querySelectorAll(".eye");

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
        console.log(e.target.src);
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