let token = "pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS";

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