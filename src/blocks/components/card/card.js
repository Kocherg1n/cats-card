document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".products__item");
    const btns = document.querySelectorAll(".products__button");


    cards.forEach(card => {
        if (card.classList.contains("products--disabled")) {
            card.nextElementSibling.textContent = "Печалька, с курой закончился.";
            card.nextElementSibling.style.color = "#ffff66";
        }

        card.addEventListener("click", () => {
            if (!card.classList.contains("products--disabled")) {
                card.classList.toggle("products--selected");
                card.nextElementSibling.classList.toggle("products--hide");
                card.nextElementSibling.nextElementSibling.classList.toggle("products--show");
            }
        });
    });


    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.parentNode.classList.toggle("products--hide");
            btn.parentNode.previousElementSibling.classList.toggle("products--selected");
            btn.parentNode.nextElementSibling.classList.toggle("products--show");
        });
    });
});
