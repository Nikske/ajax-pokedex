let input = document.getElementById("pokemon");
// Function to get a random number, used later to get random moves.
function randomNumber(num) {
    return Math.round(Math.random() *num);
}

document.getElementById("run").addEventListener("click", function() {
    previousEvolution();
    fetch("https://pokeapi.co/api/v2/pokemon/" + input.value.toLowerCase()).then((response) => {
        return response.json();
    })
        .then((data) => {
            console.log(data);

            /* SPRITE */
            document.getElementById("pokeimg").src = data['sprites']['front_default'];

            /* MOVES */
            // 4 random moves - Still need to prevent duplicates & And Ditto only has one move, the bastard
            let randomMoves = [];
            let lengthARR = data['moves'].length - 1;
            for (let i=0; i<data['moves'].length; i++) {
                try {
                    randomMoves.push(data['moves'][randomNumber(lengthARR)]['move']['name']);
                }
                catch (e) {
                    console.log(e.toString());
                }
            }
            randomMoves.filter((item, index) => {
                return randomMoves.indexOf(item) === index;
            });
            console.log(randomMoves);
            /*let moves = [];
            for (let i = 0; i<data['moves'].length; i++) {
                moves.push(data['moves'][i]['move']['name']);
            }
            console.log(moves);*/
            /*for (let i = 1; i < 5; i++) {
            document.getElementById("move" + i + "").innerHTML = data['moves'][randomNumber(data['moves'].length)]['move']['name'];
            }*/

        })
});

/* PREVIOUS EVOLUTION */
// Separate API call to get pokemon species data, including evolution etc.
async function previousEvolution() {
    await fetch(`https://pokeapi.co/api/v2/pokemon-species/${input.value.toLowerCase()}`).then((response) => {
        return response.json();
    })
        .then((evolutionData) => {

            if (evolutionData['evolves_from_species'] == null) {
                document.getElementById("previous").innerHTML = "";
                document.getElementById("preevoimg").src = "";
            } else {
                let name = evolutionData['evolves_from_species']['name'];
                document.getElementById("previous").innerHTML = name.toUpperCase();
                previousEvolutionImage(name);
            }
        })
}
// Going back to the 'first' api to collect the previous evolution sprite
async function previousEvolutionImage(namepokemon) {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${namepokemon}`).then((response) => {
        return response.json();
    })
        .then((preEvoData) => {
            document.getElementById("preevoimg").src= preEvoData['sprites']['front_default'];
        })
}
