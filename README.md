# Background
In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Instructions
Complete the following steps:

1. Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

    - Use sample_values as the values for the bar chart.

    - Use otu_ids as the labels for the bar chart.

    - Use otu_labels as the hovertext for the chart.

      ![hw01](https://github.com/JLaydeJ/belly-button-challenge/assets/134284646/52c08aba-4781-484a-b35c-132ca1a58c34)


3. Create a bubble chart that displays each sample.

    - Use otu_ids for the x values.

    - Use sample_values for the y values.

    - Use sample_values for the marker size.

    - Use otu_ids for the marker colors.

    - Use otu_labels for the text values.
  
    <img width="1416" alt="bubble_chart" src="https://github.com/JLaydeJ/belly-button-challenge/assets/134284646/92fea668-5899-48b5-b034-0bae98ff122c">


4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

      ![hw03](https://github.com/JLaydeJ/belly-button-challenge/assets/134284646/98e78d39-299a-4f8c-b858-e13c0b142710)


6. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

![hw02](https://github.com/JLaydeJ/belly-button-challenge/assets/134284646/58c58947-7061-441d-9c60-f4c0da40ff79)


7. Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file
   Deployment site: https://jlaydej.github.io/belly-button-challenge/

## Advanced Challenge Assignment (Optional with no extra points earning)

The following task is advanced and therefore optional.
- Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/Links to an external site. to plot the weekly washing frequency of the individual.

- You will need to modify the example gauge code to account for values ranging from 0 through 9.

- Update the chart whenever a new sample is selected.

  <img width="384" alt="gauge" src="https://github.com/JLaydeJ/belly-button-challenge/assets/134284646/1e90bbee-26e5-4807-b845-14ecc1016def">

    
### Hints
- Use console.log inside of your JavaScript code to see what your data looks like at each step.

- Refer to the Plotly.js documentationLinks to an external site. when building the plots.
