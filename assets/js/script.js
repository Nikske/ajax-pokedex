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
            // Ditto is still at large and a problem
            let randomMoves = [];
            // Variable for readability, -1 because 0 is the start, not 1
            let lengthARR = data['moves'].length - 1;
            for (let i=0; i<data['moves'].length; i++) {
                randomMoves.push(data['moves'][randomNumber(lengthARR)]['move']['name']);
            }
            // Filter to filter out duplicates. Remember that your return needs something to return to, silly.
            let filteredMoves = randomMoves.filter((item, index) => {
                return randomMoves.indexOf(item) === index;
            });
            // Inserting randomised, filtered moves
            for (let j = 1; j < 5; j++) {
            document.getElementById("move" + j + "").innerHTML = filteredMoves[j];
            }

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
