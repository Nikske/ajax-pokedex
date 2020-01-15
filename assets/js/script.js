// Wolf

let input = document.getElementById("pokemon");
// Function to get a random number, used later to get random moves.
function randomNumber(num) {
    return Math.round(Math.random() *num);
}

document.getElementById("run").addEventListener("click", function() {
    fetch("https://pokeapi.co/api/v2/pokemon/" + input.value.toLowerCase()).then((response) => {
        return response.json();
    })
        .then((data) => {
            console.log(data);
            /* SPRITE */
            document.getElementById("pokeimg").src = data['sprites']['front_default'];
            /* MOVES */
            // 4 random moves - Still need to prevent duplicates
            document.getElementById("move1").innerHTML = data['moves'][randomNumber(data['moves'].length)]['move']['name'];
            document.getElementById("move2").innerHTML = data['moves'][randomNumber(data['moves'].length)]['move']['name'];
            document.getElementById("move3").innerHTML = data['moves'][randomNumber(data['moves'].length)]['move']['name'];
            document.getElementById("move4").innerHTML = data['moves'][randomNumber(data['moves'].length)]['move']['name'];



        })
});