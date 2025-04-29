document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll(".form-container, .form-container-active");
    const leftButtons = document.querySelectorAll("#change-button-left");
    const rightButtons = document.querySelectorAll("#change-button-right");
    const description = document.querySelector(".description-container h1");

    let currentIndex = 0;

    function showForm(index) {
        forms.forEach((form, i) => {
        form.classList.remove("form-container-active");
        form.classList.add("form-container");
        if (i === index) {
            form.classList.add("form-container-active");
            form.classList.remove("form-container");
        }
    });

    if (index === 0) {
        description.textContent = "Reseña";
        } else {
        description.textContent = "Contacto";
        }
    }
    rightButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % forms.length;
        showForm(currentIndex);
        });
    });
    leftButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + forms.length) % forms.length;
        showForm(currentIndex);
        });
    });

    showForm(currentIndex);
    });

document.addEventListener('DOMContentLoaded', () => {
    const apiToken = 'xwjZjJrd7M9kJZUZxkJ3F5gxNCNGGXAgmrrtzFpPcilL2YKFluCj5Cm5np41'; 
    cargarComentarios(apiToken);
});

async function cargarComentarios(apiToken) {
    try {
    const response = await fetch(`https://phpstack-1076337-5399863.cloudwaysapps.com/api/comments/${apiToken}`);
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const commentsList = document.getElementById('comments-ul');
    commentsList.innerHTML = '';
    data.data.forEach(comentario => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${comentario.name}:</strong> ${comentario.content}`;
        commentsList.appendChild(li);
    });

    } catch (error) {
    console.error('Error al cargar comentarios:', error);
    }
}

async function enviarReseña(apiToken, nombre, contenido) {
    const body = {
        api_token: apiToken,
        name: nombre,
        content: contenido
    };

    try {
        const response = await fetch(`https://phpstack-1076337-5399863.cloudwaysapps.com/api/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
        });

        const result = await response.json();

        if (response.ok) {
            alert("¡Comentario enviado correctamente!");
        } else {
            console.error("Error al enviar comentario:", result);
            alert("Hubo un error al enviar tu comentario.");
        }

    } catch (error) {
        console.error("Error de red:", error);
        alert("Error de red al intentar enviar la reseña.");
    }
}

document.querySelector('.send-button-reseña').addEventListener('click', (e) => {
    e.preventDefault();
    const token = 'xwjZjJrd7M9kJZUZxkJ3F5gxNCNGGXAgmrrtzFpPcilL2YKFluCj5Cm5np41';
    const nombre = document.querySelector('.reseña input').value;
    const contenido = document.querySelector('.reseña textarea').value;
    enviarReseña(token, nombre, contenido);
});

async function enviarContacto(apiToken, nombre, email, asunto, mensaje) {
    const body = {
        api_token: apiToken,
        nombre: nombre,
        email: email,
        asunto: asunto,
        mensaje: mensaje
    };

    try {
        const response = await fetch(`https://phpstack-1076337-5399863.cloudwaysapps.com/api/contact`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
        });

    const result = await response.json();

    if (response.ok) {
        alert("¡Mensaje de contacto enviado!");
    } else {
        console.error("Error en el envío:", result);
        alert("Error al enviar mensaje de contacto.");
    }

    } catch (error) {
        console.error("Error de red:", error);
        alert("Error de red al intentar enviar el mensaje.");
    }
}

document.querySelector('.send-button-contacto').addEventListener('click', (e) => {
    e.preventDefault();
    const token = 'xwjZjJrd7M9kJZUZxkJ3F5gxNCNGGXAgmrrtzFpPcilL2YKFluCj5Cm5np41';
    const nombre = document.getElementById('nombre-contacto').value;
    const email = document.getElementById('mail-contacto').value;
    const asunto = document.getElementById('asunto-contacto').value;
    const mensaje = document.getElementById('mensaje-contacto').value;

    enviarContacto(token, nombre, email, asunto, mensaje);
});

