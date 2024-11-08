para = document.querySelector('p');
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
}

