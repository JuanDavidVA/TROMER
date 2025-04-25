let descriptions = [
    "Esta es la descripción de la imagen 1.Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
    "Esta es la descripción de la imagen central.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    "Esta es la descripción de la imagen 3.Lorem, ipsum dolor sit amet consectetur adipisicing elit."
];

function changeText(index) {
    if (index < 0 || index >= descriptions.length) return;

    document.getElementById("dynamic-text").textContent = descriptions[index];

    const containers = document.querySelectorAll(".image-container");
    containers.forEach(img => img.classList.remove("active"));

    if (containers[index]) {
        containers[index].classList.add("active");
    }
}