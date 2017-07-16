$(document).ready(function() {
    drawChart();
    $(window).on('resize', function() {
        chart.width(width()).height(height());
        drawChart();
    });
});

var margins = { top: 20, right: 20, left: 40, bottom: 20 };

var chart = timeSeriesChart()
    .x(function(d) { return d3.time.format("%Y-%m-%d").parse(d.date); })
    .y(function(d) { return +d.price; })
    .width(width())
    .height(height())
    .margin(margins);

function width() {
    return $(window).width() - (margins.right + margins.left);
}

function height() {
    return $(window).height() - (margins.top + margins.bottom);
}

function drawChart() {
    $.get('/prices', createChart);
}

function createChart(data) {
    if (typeof data === 'string')
        data = JSON.parse(data);
    d3.select(".chart")
        .datum(data)
        .call(chart);
}

