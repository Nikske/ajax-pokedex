
let input2 = document.getElementById("pokemon");

document.getElementById("run").addEventListener("click", function() {
    fetch("https://pokeapi.co/api/v2/pokemon/" + input2.value).then((response) => {
        return response.json();
    })
        .then((data) => {
            console.log(data);

            document.getElementById("pokename").innerHTML=data['name'];
            document.getElementById("pokeid").innerHTML=data['id'];



        })
});








