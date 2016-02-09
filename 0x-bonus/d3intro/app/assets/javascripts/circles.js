$(document).ready(function () {
  var svg = d3.select('svg');

  var circle = svg.selectAll('circle').data([32, 57, 112, 293]);

  circle.attr('cx', function (d, i) { return i * 100 + 30 });
  circle.attr('r', function (d) { return Math.sqrt(d); });

  circle.enter().append('circle')
    .attr('cy', 60)
    .attr('cx', function (d, i) { return i * 100 + 30 })
    .attr('r', function (d) { return Math.sqrt(d); });

  circle = svg.selectAll('circle').data([32, 57]);
  circle.exit().remove();
});