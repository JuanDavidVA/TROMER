const api_url = "https://phpstack-1076337-5399863.cloudwaysapps.com/api/classification";
const token = "pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS"

const rankingTable = document.getElementById("ranking");


async function getAllUsers() {
    try {
        const answer = await fetch("https://phpstack-1076337-5399863.cloudwaysapps.com/api/classification/pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS");
        const data = await answer.json();
        return data.data;
    }catch 
    {
        console.error("Error al cargar los usuarios");
    }
}


function drawRanking() {
    let users = getAllUsers();

    console.log(users)
    
  
}

drawRanking();