document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in-up");

    fadeElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("active");
        }, index * 400); // delay
    });
});
