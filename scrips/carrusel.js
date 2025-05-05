let descriptions = [
    "Se utiliza una iluminación simple, al igual que unos gráficos minimalistas.Los efectos de sonido y la música se utilizan para dar la sensación de estrés que pretende el juego, al mismo tiempo que favorecen a la jugabilidad dando señales acústicas y advertencias que favorecen al jugador durante la partida.",
    "El modelo del dron es de creación propia, ajustándose a los colores y la ambientación principal que tiene el juego.Las mecánicas del dron y su original forma de manejarlo por el entorno mediante las cámaras de seguridad, son la principal esencia por la que se caracteriza el juego y es lo que más trabajo ha conllevado a la hora de su desarrollo. Teniendo el resultado óptimo y viable para el juego.",
    "Desde un inicio se pretendía darle más protagonismo a la criatura, dándole otro diseño diferente y haciéndolo más peligroso teniendo más interacciones durante la partida. Pero por problemas de desarrollo no se le ha podido hacer mucho más.Tal vez más adelante reciba un importante rework."
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