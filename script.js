// Define the data for two nodes
var nodes = [
  { name: "One" },
  { name: "Two" }
];

// Define the links between the nodes
var links = [
  { source: nodes[0], target: nodes[1] }
];

// Set the size of the graph
var width = 500, height = 500;

// Create the svg canvas
var svg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Create the force simulation
var simulation = d3.forceSimulation(nodes)
  .force("link", d3.forceLink(links).id(function(d) { return d.name; }))
  .force("charge", d3.forceManyBody())
  .force("center", d3.forceCenter(width / 2, height / 2));

// Add the links to the svg
var link = svg.append("g")
  .attr("class", "links")
  .selectAll("line")
  .data(links)
  .enter().append("line")
  .attr("stroke-width", 2);

// Add the nodes to the svg
var node = svg.append("g")
  .attr("class", "nodes")
  .selectAll("circle")
  .data(nodes)
  .enter().append("circle")
  .attr("r", 10)
  .attr("fill", "lightblue");

// Add the node names to the svg
var label = svg.append("g")
  .attr("class", "labels")
  .selectAll("text")
  .data(nodes)
  .enter().append("text")
  .text(function(d) { return d.name; });

// Update the graph on each tick of the simulation
simulation.on("tick", function() {
  link.attr("x1", function(d) { return d.source.x; })
    .attr("y1", function(d) { return d.source.y; })
    .attr("x2", function(d) { return d.target.x; })
    .attr("y2", function(d) { return d.target.y; });
  node.attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; });
  label.attr("x", function(d) { return d.x + 15; })
    .attr("y", function(d) { return d.y; });
});
