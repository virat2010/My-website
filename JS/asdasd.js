var exp = "it's y=x+17";

// Generate values
var xValues = [];
var yValues = [];
for (var x = 0; x <= 10; x += 1) {
  yValues.push(eval(exp));
  xValues.push(x);
}

// Define Data
var data = [{
  x: xValues,
  y: yValues,
  mode: "lines"
}];

// Define Layout
var layout = {title: "y = " + exp};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);