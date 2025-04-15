/*
let apiUrl = "https://phpstack-1076337-5399863.cloudwaysapps.com/";
let token = "pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS";


async function getPost() {
    try{
        let respose = await fetch("https://phpstack-1076337-5399863.cloudwaysapps.com/api/posts/" + token);
        let data = await respose.json();
        console.log(data);
        return data;
    }catch{
        alert("erro al recibir datos");
    };
}

async function drawPost(){
    let listaPost = document.getElementById("post-list");
   
    let data = getPost().then(valor => {
        for(let i =0;i < valor.length; i++){

        }
    })


}/**/
