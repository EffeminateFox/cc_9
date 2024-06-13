//U54529624

// Function to initialize
function initialize() {
    // Sample data array
    var data = [1, 2, 3, 4, 5];

    // Select the chart div and bind data to div elements
    d3.select("#chart")
        .selectAll(".datapoint")
        .data(data)
        .enter()
        .append("div")
        .attr("class", "datapoint")
        .text(d => d)
        .on("mouseover", function() {
            // Background color on mouseover
            d3.select(this).style("background-color", "firebrick");
        })
        .on("mouseout", function() {
            // Revert background color on mouseout
            d3.select(this).style("background-color", "lightblue");
        });
}

// Call the initialize function when DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    initialize();
});
