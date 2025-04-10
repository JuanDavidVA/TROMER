const buttonChangeForm = document.getElementById("change-button");


buttonChangeForm.onclick = function() {
    let aboutDisplay = document.getElementById("div1-2");

    document.getElementById("")
    aboutDisplay.innerHTML = ``;
    aboutDisplay.innerHTML = `
    <div class="description-container">
        <h1>Contacto</h1>
    </div>
    <div class="reseña-container">
        <div class="reseña">
            <span class="heading"></span>
            <form action="">
                <input placeholder="Nombre" type="text" class="input">
                <input placeholder="Email" id="mail" type="email" class="input">
                <input placeholder="Asunto" id="asunto" type="text" class="input">
                <textarea placeholder="Escríbe tu mensaje" rows="10" cols="30" id="message" name="message" class="textarea"></textarea>
                <div class="button-container">
                    <button class="send-button">Enviar</button>
                    
                    <div class="reset-button-container">
                        <button id="reset-btn" class="reset-button">Reiniciar</button>
                    </div>

                </div>
            </form>
        </div>
        <div class="change-form-button">
            <button type="button" class="change-button">></button>
        </div>
    </div>
    `;
}