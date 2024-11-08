const pokemonInput = document.querySelector(".pokeInput");
const button = document.querySelector("button");
const rScale = d3.scaleSqrt().domain([1, 1000]).range([10, 500]);

button.addEventListener('click', function() {
    let pokeInput = pokemonInput.value.toLowerCase();
    d3.json(`https://pokeapi.co/api/v2/pokemon/${pokeInput}`).then(function(data) {
        d3.selectAll('circle').remove();
        let pokeData = [];

        pokeData.push({name: data.name});
        pokeData.push({experience: data.base_experience});
        pokeData.push({weight: data.weight});
        pokeData.push({hp: data.stats[0].base_stat});
        pokeData.push({attack: data.stats[1].base_stat});
        pokeData.push({defense: data.stats[2].base_stat});
        pokeData.push({speed: data.stats[5].base_stat});
        pokeData.push({type: data.types[0].type.name});
        createCircles(pokeData);
    }).catch(function(error) {
        console.log("error", error);
    })
})

const HEIGHT = 700;
const WIDTH = 1500;
const MARGIN = 50;

let svg = d3.select('svg').attr('height', HEIGHT)
.attr('width', WIDTH);

const forceX = d3.forceX(WIDTH/2).strength(0.3);
const forceY = d3.forceY(HEIGHT/2).strength(0.3);
const collide = d3.forceCollide(d => rScale(d.weight+0.1 || d.speed + 0.1 || d.hp + 0.1 || d.attack + 0.1 || d.defense + 0.1) + 2);
const manyBody = d3.forceManyBody().strength(-50);

const simulation = d3.forceSimulation()
.force("x", forceX)
.force("y", forceY)
.force("forceCollide", collide)
.force("manyBody", manyBody);

function createCircles(data) {
    let circles = svg.selectAll()
    .data(data).enter()
    .append('circle')
    .attr('r', d => rScale(d.weight+0.1 || d.speed + 0.1 || d.hp + 0.1 || d.attack + 0.1 || d.defense + 0.1))
    .style('fill',d=>setColour(d)).style("stroke", "#000");

    simulation.nodes(data).on('tick', function() {
        circles.attr("cx", d => d.x)
        .attr("cy", d => d.y);
        simulation.alphaTarget(0.3).restart()
    });
}

function setColour(d1) {
    if (d1 == "poison") {
        return "#701F41"
    } 
    else if (d1 == "grass") {
        return '#f59090';
    }
    else if (d1 == "fire") {
        return '#801240';
    }
    else if (d1 == "water") {
        return '#ff7a7a';
    }
    else if (d1 == "bug") {
        return '#ffb3b3';
    }
    else if (d1 == "normal") {
        return '#E77373';
    }
    else if (d1 == "electric") {
        return '#70324c';
    }
    else if (d1 == "ground") {
        return '#ed5858';
    }
    else if (d1 == "fairy") {
        return '#80284c';
    }

    if (d1.weight) {
        return "#701F41"
    } 
    else if (d1.speed) {
        return '#f249b4';
    }
    else if (d1.hp) {
        return '#be67db';
    }
    else if (d1.attack) {
        return '#4a2573';
    }
    else if (d1.defense) {
        return '#E77373';
    }
}


/*para = document.querySelector('p');
const pokeDate = []; 

for (let i = 1; i < 51; i++) {
    d3.json(`https://pokeapi.co/api/v2/pokemon/${i}`).then(function(data) {
        console.log(data.types[0].type.name)
        createCircles(data.weight, data.id, data.types[0].type.name);
    }).catch(function(error) {
        para.innerHTML = "There was an error fetching data. Please try again later."
        console.log("error", error);
    });    
}



//Create SVGs
const HEIGHT = 700;
const WIDTH = 1500;
const MARGIN = 50;

let svg = d3.select('svg').attr('height', HEIGHT)
.attr('width', WIDTH);

let xScale = d3.scaleLinear().domain([0, 9]).range([0, WIDTH]);


function createCircles(data, id, d1) {
    svg.append('circle')
    .attr('r', data/10).attr('cx', xScale(id%8 + 1)).attr('cy', (id + 6.5)*11).style('fill', setColour(d1)).style("stroke", "#000");
}
    
function setColour(d1) {
    if (d1 == "poison") {
        return "#701F41"
    } 
    else if (d1 == "grass") {
        return '#f59090';
    }
    else if (d1 == "fire") {
        return '#801240';
    }
    else if (d1 == "water") {
        return '#ff7a7a';
    }
    else if (d1 == "bug") {
        return '#ffb3b3';
    }
    else if (d1 == "normal") {
        return '#E77373';
    }
    else if (d1 == "electric") {
        return '#70324c';
    }
    else if (d1 == "ground") {
        return '#ed5858';
    }
    else if (d1 == "fairy") {
        return '#80284c';
    }
}*/

