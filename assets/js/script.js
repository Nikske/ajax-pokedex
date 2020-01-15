// Wolf

let input = document.getElementById("pokemon");

document.getElementById("run").addEventListener("click", function() {
    fetch("https://pokeapi.co/api/v2/pokemon/" + input.value.toLowerCase()).then((response) => {
        return response.json();
    })
        .then((data) => {
            console.log(data);
            // Image
            document.getElementById("pokeimg").src = data['sprites']['front_default'];
            // Moves
            for (let i = 0; i<4; i++) {
                document.getElementById("pokemoves").innerHTML += "<li>" + data['moves'][i]['move']['name'] + "</li>"
            }
        })
});