const width = 500;
const height = 500;

const svg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

const nodes = [
  {id: "one", x: 100, y: 200},
  {id: "two", x: 400, y: 100}
];

const edges = [
  {source: "one", target: "two"}
];

const link = svg.selectAll(".link")
  .data(edges)
  .enter()
  .append("line")
  .attr("x1", d => {return d.source.x})
  .attr("y1", d => {return d.source.y})
  .attr("x2", d => {return d.target.x})
  .attr("y2", d => {return d.target.y})
  .attr("stroke", "black")
  .attr("stroke-width", 2);

const node = svg.selectAll(".node")
  .data(nodes)
  .enter()
  .append("circle")
  .attr("cx", d => {return d.x})
  .attr("cy", d => {return d.y})
  .attr("r", 10)
  .attr("fill", "red");
