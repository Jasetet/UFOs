// import the data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    //clear out any data
    tbody.html("");
  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
    // Append a row to the table body
        let row = tbody.append("tr");
    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}
//Create filters
function handleClick() {
    //Filter by date
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    //check to see if a date was entered and filter using that date
    if (date) {
        //apply filter to the table data to only keep rows with 'datetime' value that matches.
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    //Re-Build table using filtered data, if no date entered then it will show original table
    buildTable(filteredData)
    //attach an event to listen for the form button
    d3.selectAll("#filter-btn").on("click", handleClick);
    //build table when page loads
    buildTable(tableData);
};