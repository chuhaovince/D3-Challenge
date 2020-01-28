// @TODO: YOUR CODE HERE!

// set the promise as a const variable
d3.csv("../assets/data/data.csv").then(function(data){
    var abbr = data.map(d => d.abbr);
    var poverty = data.map(d => d.poverty);
    var age = data.map(d => d.age);
    var income = data.map(d => d.income);
    var healthCare = data.map(d => d.healthcare);
    var obese = data.map(d => d.obesity);

    trace1 = {
        x : poverty,
        y : healthCare,
        type : "scatter"
    };

    plotdata = [trace1];

    Plotly.newPlot("#scatter",plotdata);
})

