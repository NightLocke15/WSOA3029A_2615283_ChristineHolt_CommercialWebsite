//Looked back on practice classes for d3 to implement these visualisations

//Fetch data from Fruityvice
d3.json('https://www.fruityvice.com/api/fruit/all').then(data => {
    let sugarData = data.map(datum => ({
        id: datum.id,
        name: datum.name,
        sugar: datum.nutritions.sugar
    }));

    createScales(sugarData);
    createCircles(sugarData);

    let dataCoke = [
        {
            name: 'coke',
            sugar: 10.6
        }
    ];
    cokeCircle(dataCoke);
    fruitCircle(sugarData);
});

//Create SVGs
const HEIGHT = 700;
const WIDTH = 1000;
const MARGIN = 50;

//Create 1st visualisation svg
let svg = d3.select('.svg1')
.append('svg')
.attr('height', HEIGHT)
.attr('width', WIDTH);

//Create 2nd visualisation svg
let otherSvg = d3.select('.svg2')
.append('svg')
.attr('height', HEIGHT - 200)
.attr('width', WIDTH);

//add a circle that will showcase the fruit separately
otherSvg.append('circle')
.attr('class', 'fruitCircle')
.attr('cx', 600)
.attr('cy', 200);

//Create Scales
function createScales(data) {
    const minSug = d3.min(data, d => d.sugar);
    const maxSug = d3.max(data, d => d.sugar);

    rScale = d3.scaleSqrt().domain([minSug, maxSug]).range([0.1, 50]);
    otherScale = d3.scaleSqrt().domain([minSug, maxSug]).range([1, 200]);
}

//Create all the forces needed for the simulation
const forceX = d3.forceX(WIDTH/2).strength(0.05);
const forceY = d3.forceY(HEIGHT/2).strength(0.05);
const collide = d3.forceCollide(d => rScale(d.sugar) + 2);
const manyBody = d3.forceManyBody().strength(-50);
const forceXSplit = d3.forceX(function (d) {
    if (d.sugar <= 4.7) {
        return 150;
    } 
    else if (d.sugar <= 10.1) {
        return 350;
    }
    else if (d.sugar <= 14.4) {
        return 550;
    }
    else {
        return 750;
    }
});


//Create the simulation
const simulation = d3.forceSimulation()
.force("x", forceX)
.force("y", forceY)
.force("forceCollide", collide)
.force("manyBody", manyBody);


//Create a function that colours the circles accoring to their sugar level
function setColour(d) {
    if (d.sugar <= 4.7) {
        return '#fac3d9';
    } 
    else if (d.sugar <= 10.1) {
        return '#fa82b4';
    }
    else if (d.sugar <= 14.4) {
        return '#b82864';
    }
    else {
        return '#3b0119';
    }
}

//Create Circles
function createCircles(data) {
    let circles = svg.selectAll()
    .data(data).enter()
    .append('circle')
    .attr('r', d => rScale(d.sugar+0.1)).style('fill', d => setColour(d))
    .on('mouseover', (e, datum) => tipVisible(datum))
    .on('mousemove', tipMove).on('mouseout', tipGone);

    simulation.nodes(data).on('tick', function() {
        circles.attr("cx", d => d.x)
        .attr("cy", d => d.y);
    });

    d3.select('#split').on('click', function() {
        simulation.force("x", forceXSplit).alphaTarget(0.3).restart();
    })

    d3.select('#combine').on('click', function () {
        simulation.force("x", forceX).alphaTarget(0.6).restart();
    })
}

//Create the coke circle
function cokeCircle(data) {
    otherSvg.selectAll()
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', 200)
    .attr('cy', 200)
    .attr('r', otherScale(10.6))
    .style("fill", "#000")
}

//Set the fruit circle according to the button pressed
function fruitCircle(data) {
    let fruits = data.map(function(datum) {
        return `<button class="fruitButton" id="${datum.id}">${datum.name}</button>`
    }).join("");

    document.querySelector('.options').innerHTML = fruits;

    const fruitButts = document.querySelectorAll('.fruitButton');

    fruitButts.forEach(function (butt) {
        butt.addEventListener('click', function(){
            let identity = event.currentTarget.id;
            console.log(identity);
            let fruitResult = data.filter(function(datum) {
                if(datum.id == identity) {
                    return datum;
                }
                
            })
            console.log(fruitResult);
            d3.select('.fruitCircle')
            .attr('r', otherScale(fruitResult[0].sugar))
            .style('fill', legendColour(names[1]))
            .on('mouseover', tipVisibleToo(fruitResult[0]))
            .on('mousemove', tipMoveToo).on('mouseout', tipGoneToo);;
        });
    });
}



//Create legend
const sugarContent = ['Lowest', 'Relatively Low', 'Relatively High', 'Highest'];
const names = ["Soda", "Fruit"];

function legendColour(data) {
    if (data == 'Lowest') {
        return '#fac3d9';
    } 
    else if (data == 'Relatively Low') {
        return '#fa82b4';
    }
    else if (data == 'Relatively High') {
        return '#b82864';
    }
    else if (data == 'Coke') {
        return '#000000'
    }
    else if (data == 'Fruit') {
        return '#E77373'
    }
    else {
        return '#3b0119';
    }
}

//legend for first svg
svg.append('g')
.selectAll()
.data(sugarContent)
.enter()
.append('circle')
.attr('cx', 10)
.attr('cy', (d, i) => {
    return 600 + i * 25;
})
.attr('r', 10)
.style('fill', d => legendColour(d));

svg.append('g')
.selectAll()
.data(sugarContent)
.enter()
.append('text')
.attr('x', 25)
.attr('y', (d, i) => {
    return 605 + i * 25;
})
.style('fill', '#000')
.text(d => d);

//legend for second svg
otherSvg.append('g')
.selectAll()
.data(names)
.enter()
.append('circle')
.attr('cx', 10)
.attr('cy', (d, i) => {
    return 450 + i * 25;
})
.attr('r', 10)
.style('fill', d => legendColour(d));

otherSvg.append('g')
.selectAll()
.data(names)
.enter()
.append('text')
.attr('x', 25)
.attr('y', (d, i) => {
    return 455 + i * 25;
})
.style('fill', '#000')
.text(d => d);

//Create tooltips for both svgs
let toolTip = d3.select('.svg1')
.append('div')
.style('color', '#000')
.style('background-color', '#fff')
.style('padding', '5px')
.style('border-radius', '5px')
.style('outline', '2px solid #701F41')
.style('position', 'relative')
.style('width', '150px')
.style('opacity', 0);

let toolTipToo = d3.select('.svg2')
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
    toolTip.style('opacity', 1).html(`<p>Name: ${datum.name}</p><p>Sugar Content: ${datum.sugar}`);
    toolTip.style('left', d3.pointer(event)[0] + 30 + 'px');
    toolTip.style('top', d3.pointer(event)[1] - 700 + 'px');
}

function tipVisibleToo(datum) {
    toolTipToo.style('opacity', 1).html(`<p>Name: ${datum.name}</p><p>Sugar Content: ${datum.sugar}`);
    toolTipToo.style('left', d3.pointer(event)[0] + 30 + 'px');
    toolTipToo.style('top', d3.pointer(event)[1] - 700 + 'px');
}

function tipMove() {
    toolTip.style('left', d3.pointer(event)[0] + 30 + 'px');
    toolTip.style('top', d3.pointer(event)[1] - 700 + 'px');
}

function tipMoveToo() {
    toolTipToo.style('left', d3.pointer(event)[0] + 30 + 'px');
    toolTipToo.style('top', d3.pointer(event)[1] - 700 + 'px');
}

function tipGone() {
    toolTip.style('opacity', 0);
}

function tipGoneToo() {
    toolTipToo.style('opacity', 0);
}
