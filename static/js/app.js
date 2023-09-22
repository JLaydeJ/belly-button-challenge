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
        data.names.forEach(name => {
            dropdownMenu.append('option').text(name).property('value', name);
        });
        // Set iniial/default data point on dashboard
        // Use optionChanged from html to pull data points
        optionChanged(data.names[0], data);

    });
}
// Ceate graphs using first data point
// Create function to update dashboard for new data point selected
function optionChanged(newData, data) {

    d3.json(url).then(data => {
    // Pull data for selected data point
    const selectedData = data.samples.find(sample => sample.id === newData);
    const metadata = data.metadata.find(metadata => metadata.id.toString() === newData);

	// Update demographic chart
    demographicChart(metadata);

	// Bar and Bubble Chart
    barAndBubbleChart(selectedData);

	// Gauge chart
    gaugeChart(metadata);
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
function gaugeChart(data){
    let wfreq = data.wfreq;
    let gauge1 = [{
            type: 'indicator',
            mode: 'gauge+number',
            title: {text: 'Belly Button Washing Frequency<br>Scrubs per Week'},
            value: wfreq,
            gauge: {
                shape: 'angular',
                axis: {range: [null, 9], tickwidth: 1, tickcolor: "black" },
                bar: {color: 'black'},
                steps: [
                    { range: [0, 1], color: "white" },
                    { range: [1, 2], color: "lightblue" },
                    { range: [2, 3], color: "yellowgreen" },
                    { range: [3, 4], color: "green" },
                    { range: [4, 5], color: "lightgreen" },
                    { range: [5, 6], color: "darkgreen" },
                    { range: [6, 7], color: "yellow" },
                    { range: [7, 8], color: "orange" },
                    { range: [8, 9], color: "lightyellow" }
                    ],
                },
            }
        ]
        let layout2 =  {
            xaxis: {title: 'Swabs per Week'},
            height: 500,
            width: 500
        }  
        
        
    Plotly.newPlot('gauge', gauge1, layout2);
}

// Create Demographic Chart
// Use metadataList.html('') to clear previous data
// https://stackoverflow.com/questions/65495437/problems-creating-a-horizontal-bar-chart-using-javascript-cant-figure-out-my-e
// https://stackoverflow.com/questions/48747444/object-entries-with-foreach-to-map-array-of-objects-returns-undefined-except-whe
// Use metadata as defined above
function demographicChart(metadata) {
    const metadataList = d3.select('#sample-metadata');
    metadataList.html(''); 
    
    Object.entries(metadata).forEach(([key, value]) => {
        metadataList.append('p').text(`${key}:${value}`);
    });
};

init();