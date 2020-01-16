
let input2 = document.getElementById("pokemon");

document.getElementById("run").addEventListener("click", function() {
    fetch("https://pokeapi.co/api/v2/pokemon/" + input2.value.toLowerCase()).then((response) => {
        return response.json();
    })
        .then((data) => {


            document.getElementById("pokename").innerHTML=data['name'].toUpperCase();
            document.getElementById("pokeid").innerHTML=data['id'];



        })
});
