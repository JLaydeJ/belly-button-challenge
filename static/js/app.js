// Set url to constant variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it for reference
d3.json(url).then(function(data) {
  console.log(data);
});

// Initialize data for dashboard
function init(){
// Load JSON and set dropdown menu equal to constant variable
    d3.json(url).then(data => {
        const dropdownMenu = d3.select('#selDataset');

      // Add option names/ids to dropdown menu
        data.names.forEach(id => {
            dropdownMenu.append('option').text(id).property('value', id);
        });
        // Set iniial/default data point on dashboard
        optionSelection(data.names[0], data)
    });
}

// Create and display default bubble and bar chart
function barAndBubbleChart(data){
    let otu_ids = data.otu_ids;
    let sample_values = data.sample_values;
    let otu_labels = data.otu_labels;

    // Slice top 10 values and display bar graph in decending order
    // Use .reverse to order data in decending order
    // Define trace for bar chart
    let trace1 = {
        x: sample_values.slice(0, 10).reverse(),
        y: otu_ids.slice(0, 10).map(id => `OTU: ${id}`).reverse(),
        text: otu_labels.slice(0, 10).reverse(),
        type: 'bar',
        orientation: 'h',   
    };

    // Plot bar chart
    Plotly.newPlot('bar',[trace1]);

    // Define trace for bubble chart
    let trace2 = {
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: 'markers',
        marker: {
            color: otu_ids,
            colorscale: 'Jet',
            size: sample_values
        },
    };

    // Set layout for bubble chart
    let layout = {
        xaxis: {title: 'OTU ID'},
        showlegend: false,
        height: 500,
        width: 1000
    };

    // Plot bubble chart
    Plotly.newPlot('bubble',[trace2], layout);
    }

// // Create and display default gauge chart




}