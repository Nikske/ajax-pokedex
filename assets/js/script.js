// Wolf

let input = document.getElementById("pokemon");

function randomNumber(number) {

}

document.getElementById("run").addEventListener("click", function() {
    fetch("https://pokeapi.co/api/v2/pokemon/" + input.value.toLowerCase()).then((response) => {
        return response.json();
    })
        .then((data) => {
            console.log(data);
            // Image
            document.getElementById("pokeimg").src = data['sprites']['front_default'];
            // Moves
            let moveList = [];
            for (let i = 0; i<4; i++) {
                moveList.push(data['moves'][i]['move']['name']);
            }
            document.getElementById("move1").innerHTML= moveList[0];
            document.getElementById("move2").innerHTML= moveList[1];
            document.getElementById("move3").innerHTML= moveList[2];
            document.getElementById("move4").innerHTML= moveList[3];
        })
});