// Set up the graph
const width = 500, height = 500;
const svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height);

const nodes = [
  {name: "Node 1", x: 100, y: 200},
  {name: "Node 2", x: 400, y: 300}
];
const links = [{source: nodes[0], target: nodes[1]}];

// Draw the nodes
const node = svg.selectAll(".node")
  .data(nodes)
  .enter().append("circle")
  .attr("class", "node")
  .attr("cx", d => d.x)
  .attr("cy", d => d.y)
  .attr("r", 20)
  .style("fill", "lightblue");

// Draw the links
const link = svg.selectAll(".link")
  .data(links)
  .enter().append("line")
  .attr("class", "link")
  .attr("x1", d => d.source.x)
  .attr("y1", d => d.source.y)
  .attr("x2", d => d.target.x)
  .attr("y2", d => d.target.y)
  .style("stroke", "gray")
  .style("stroke-width", 2);

// Add click events to the nodes
node.on("click", function(d) {
  if (d.name === "Node 1") {
    window.location.href = "https://nano3fom.eng.ucsd.edu/fom/userhome";
  } else if (d.name === "Node 2") {
    window.location.href = "https://nano3fom.eng.ucsd.edu/fom/userhome";
  }
});
