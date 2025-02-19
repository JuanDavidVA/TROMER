let descriptions = [
    "Esta es la descripción de la imagen 1.Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
    "Esta es la descripción de la imagen central.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    "Esta es la descripción de la imagen 3.Lorem, ipsum dolor sit amet consectetur adipisicing elit."
];

function changeText(index) {
    document.getElementById("dynamic-text").textContent = descriptions[index];

    document.querySelectorAll(".image-container").forEach(img => img.classList.remove("active"));

    document.querySelectorAll(".image-container")[index].classList.add("active");
}