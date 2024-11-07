para = document.querySelector('p');

const pokeList = [];
let pokeInfo;
 

d3.json('https://pokeapi.co/api/v2/pokemon?limit=151').then(function(data) {
    data.results.forEach(function(pokemon) {
        fetchData(pokemon)
    });
    
    
}).catch(function(error) {
    para.innerHTML = "There was an error fetching data. Please try again later."
    console.log("error", error);
});

//Create SVGs
const HEIGHT = 700;
const WIDTH = 1000;
const MARGIN = 50;

let svg = d3.select('svg').attr('height', HEIGHT)
.attr('width', WIDTH);

function fetchData(pokemonData) {
    let URL = pokemonData.url;

        d3.json(URL).then(function(pokeData) {
            createCircles(pokeData.weight)
        })
}

function createScales(data) {
    const minWeight = d3.min(data, d => d.weight);
    const maxWeight = d3.max(data, d => d.weight);

    rScale = d3.scaleSqrt().domain([minWeight, maxWeight]).range([0.1, 50]);
}

function createCircles(data) {
    svg.selectAll()
    .append('circle')
    .attr('r', data).style('fill', '#fac3d9')
}
    