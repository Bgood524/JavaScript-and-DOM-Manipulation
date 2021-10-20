// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn")
// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

createtable(data)

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(data);

    var filteredData = data.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);


    // reset the table each time it's filtered
    tbody.html("");

    // create table
    createtable(filteredData)
}

// YOUR CODE HERE!
function createtable(data) {
    data.forEach(function(sighting) {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function ([key, value]) {
            // Append a cell to the row for each value
            // in the weather report object
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

