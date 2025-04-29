let token = "xwjZjJrd7M9kJZUZxkJ3F5gxNCNGGXAgmrrtzFpPcilL2YKFluCj5Cm5np41";

async function getPost() {
    try {
        let response = await fetch("https://phpstack-1076337-5399863.cloudwaysapps.com/api/posts/" + token); 
        let result = await response.json();
        return result.data;
    } catch (error) {
        alert("Error al recibir datos");
        console.error(error);
    }
}

function drawPost() {
    getPost().then(posts => {
        let listaPost = document.getElementById("post-list");
        let divPost = document.getElementById("post-list");
        divPost.innerHTML = ` <h3>Posts del Autor </h3>`;
        
        if(posts.length == 0 ){
            divPost.innerHTML = "";
        }


        posts.forEach(post => {
            let divUser = document.createElement("div");
            divUser.classList.add("div-users");
            divUser.innerHTML = `
                <h5>${post.title}</h5>
                <p>${post.content}</p>
            `;
            listaPost.appendChild(divUser);
        });
    });
}

drawPost();