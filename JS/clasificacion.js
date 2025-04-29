const api_url = "https://phpstack-1076337-5399863.cloudwaysapps.com/api/classification";
const token = "xwjZjJrd7M9kJZUZxkJ3F5gxNCNGGXAgmrrtzFpPcilL2YKFluCj5Cm5np41"

const rowTable = document.getElementById("ranking");


async function getAllUsers() {
    try {
        const answer = await fetch("https://phpstack-1076337-5399863.cloudwaysapps.com/api/classification/" + token);
        const data = await answer.json();
        return data.data;
    }catch 
    {
        console.error("Error al cargar los usuarios");
    }
}


function drawRanking() {
    rowTable.innerHTML = '';
    let users =  getAllUsers().then(valor => {
        
        for (let index = 0; index < valor.length; index++) {

            rowTable.innerHTML += `
                <tr>
                    <td>${valor[index].name}</td>
                    <td>${valor[index].puntuacion}</td>  
                </tr>
            `
        }
    
    });
  
}


window.addEventListener('load', function() {

    var fetchInterval = 300000; // 5 minutes

    drawRanking();
    setInterval(drawRanking,fetchInterval);
})