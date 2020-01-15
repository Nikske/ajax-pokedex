// Wolf

let input = document.getElementById("pokemon");

document.getElementById("run").addEventListener("click", function() {
    fetch("https://pokeapi.co/api/v2/pokemon/" + input.value).then((response) => {
        return response.json();
    })
        .then((data) => {
            console.log(data);
        })
});