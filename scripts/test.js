const pokemonInput = document.querySelector(".pokeInput");
const button = document.querySelector("button");
const rScale = d3.scaleSqrt().domain([1, 1000]).range([10, 300]);

button.addEventListener('click', function() {
    let pokeInput = pokemonInput.value.toLowerCase();
    d3.json(`https://pokeapi.co/api/v2/pokemon/${pokeInput}`).then(function(data) {
        d3.selectAll('#dataCircle').remove();
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

        let portions = [];
        for (i = 0; i < (data.weight*100)/150; i++) {
            
            portions.push({
                name: "portion"
            });
        }

        let dataText = document.querySelector('.data');
        dataText.innerHTML = `<ul>
        <li>Weight: ${data.weight}</li>
        <li>HP: ${data.stats[0].base_stat}</li>
        <li>Attack: ${data.stats[1].base_stat}</li>
        <li>Defense: ${data.stats[2].base_stat}</li>
        <li>Speed: ${data.stats[5].base_stat}</li>
        </ul>`;

        let portionText = document.querySelector('.portions');
        portionText.innerHTML = `Portions in Pokemon: ${(data.weight*100)/150}`

        createPortions(portions);
        
    }).catch(function(error) {
        console.log("error", error);
    })
})

const HEIGHT = 700;
const WIDTH = 1500;
const MARGIN = 50;

let svg = d3.select('.svgOne').attr('height', HEIGHT)
.attr('width', WIDTH);

let svgTwo = d3.select('.svgTwo').attr('height', HEIGHT)
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
    .attr('r', d => rScale(d.weight+0.1 || d.speed + 0.1 || d.hp + 0.1 || d.attack + 0.1 || d.defense + 0.1)).attr('id', "dataCircle")
    .style('fill',d=>setColour(d)).style("stroke", "#000").on('mouseover', (e, datum) => tipVisible(datum))
    .on('mousemove', tipMove).on('mouseout', tipGone);

    simulation.nodes(data).on('tick', function() {
        circles.attr("cx", d => d.x)
        .attr("cy", d => d.y);
        simulation.alphaTarget(0.3).restart()
    });
}

const forceX2 = d3.forceX(WIDTH/2).strength(0.08);
const forceY2 = d3.forceY(HEIGHT/2).strength(0.08);
const collide2 = d3.forceCollide(d => rScale(d.weight+0.1 || d.speed + 0.1 || d.hp + 0.1 || d.attack + 0.1 || d.defense + 0.1) + 2);
const manyBody2 = d3.forceManyBody().strength(-50);

const simulation2 = d3.forceSimulation()
.force("x", forceX2)
.force("y", forceY2)
.force("forceCollide", collide2)
.force("manyBody", manyBody2);

function createPortions(data) {
    let circles = svgTwo.selectAll()
    .data(data).enter()
    .append('circle')
    .attr('r', 20).attr('id', "dataCircle")
    .style('fill','#E77373').style("stroke", "#000");

    simulation2.nodes(data).on('tick', function() {
        circles.attr("cx", d => d.x)
        .attr("cy", d => d.y);
        simulation2.alphaTarget(0.3).restart()
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

const stats = ['HP', 'Speed', 'Attack', 'Defense', 'Weight'];

function legendColour(data) {
    if (data == 'HP') {
        return '#be67db';
    } 
    else if (data == 'Speed') {
        return '#f249b4';
    }
    else if (data == 'Attack') {
        return '#4a2573';
    }
    else if (data == 'Defense') {
        return '#E77373'
    }
    else if (data == 'Weight') {
        return '#701F41'
    }
}

svg.append('g')
.selectAll()
.data(stats)
.enter()
.append('circle')
.attr('cx', 10)
.attr('cy', (d, i) => {
    return 50 + i * 25;
})
.attr('r', 10)
.style('fill', d => legendColour(d));

svg.append('g')
.selectAll()
.data(stats)
.enter()
.append('text')
.attr('x', 25)
.attr('y', (d, i) => {
    return 50 + i * 25;
})
.style('fill', '#000')
.text(d => d);


let toolTip = d3.select('.svgOne')
.append('div')
.style('color', '#000')
.style('background-color', '#fff')
.style('padding', '5px')
.style('border-radius', '5px')
.style('outline', '2px solid #701F41')
.style('position', 'relative')
.style('width', '150px')
.style('opacity', 0);

function tipVisible(datum) {
    toolTip.style('opacity', 1).html(`${datum.weight}`);
    toolTip.style('left', d3.pointer(event)[0] + 30 + 'px');
    toolTip.style('top', d3.pointer(event)[1] - 700 + 'px');
}

function tipMove() {
    toolTip.style('left', d3.pointer(event)[0] + 30 + 'px');
    toolTip.style('top', d3.pointer(event)[1] - 700 + 'px');
}

function tipGone() {
    toolTip.style('opacity', 0);
}