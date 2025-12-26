//file table sorting


function sortTable(columnIndex, isNumeric = false, isDate = false) {
  const tbody = document.getElementById('file-table-body');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((a, b) => {
    let aText = a.children[columnIndex].textContent.trim();
    let bText = b.children[columnIndex].textContent.trim();

      // Case-insensitive comparison for filename column
    if (columnIndex === 1) {
      aText = aText.toLowerCase();
      bText = bText.toLowerCase();
    }

    if (isNumeric) {
      aText = parseFloat(aText.replace(/[^0-9.]/g, '')) || 0;
      bText = parseFloat(bText.replace(/[^0-9.]/g, '')) || 0;
    }

    if (isDate) {
      aText = new Date(aText);
      bText = new Date(bText);
    }

    if (aText > bText) return 1;
    if (aText < bText) return -1;
    return 0;
  });

  // Toggle direction on second click (simple: reverse if already sorted)
  if (tbody.dataset.sorted === columnIndex.toString()) {
    rows.reverse();
    delete tbody.dataset.sorted;
  } else {
    tbody.dataset.sorted = columnIndex;
  }

  // Append sorted rows
  rows.forEach(row => tbody.appendChild(row));
  //Update row numbers after sorting
  updateRowNumbers();
}

export function initializeTableSorting() {
document.querySelectorAll('thead th').forEach((th, index) => {
  if (index === 4) return; // skip Actions column

  th.addEventListener('click', () => {
   // if (index === 0) sortTable(0, true);        // # (numeric) this column idicates the amount of rows and should not be sorted
    if (index === 1) sortTable(1);              // File Name (text)
    if (index === 2) sortTable(2, true);        // Size (numeric after cleaning)
    if (index === 3) sortTable(3, false, true); // Uploaded (date)
  });
});}


//-------------add row to table--------------------
export function addRowToTable(fileName, fileSize, date) {
    // Get the table body element
    const tableBody = document.getElementById('file-table-body');
    
    // Create a new row
    const newRow = document.createElement('tr');
    
    // Get the next row number (assuming first <th> is the row number)
    const nextRowNumber = tableBody.querySelectorAll('tr').length + 1;
    
    // Create and populate the row content
    newRow.innerHTML = `
        <th>${nextRowNumber}</th>
        <td>${fileName}</td>
        <td>${fileSize}</td>
        <td>${date}</td>
        <td class="text-center">
            <button class="btn btn-sm btn-primary me-1">Download</button>
            <button class="btn btn-sm btn-warning me-1 logged-only">Rename</button>
            <button class="btn btn-sm btn-danger logged-only">Delete</button>
        </td>
    `;
    
    // Append the new row to the table body
    tableBody.appendChild(newRow);

    // usage addRowToTable("example.txt", "15 KB", "2024-06-15");

    
}
//-------------delete row from table--------------------
export function deleteRow(rowNumber) {
    // Get the table body
    const tableBody = document.getElementById('file-table-body');
    
    // Get all rows in the table
    const rows = tableBody.querySelectorAll('tr');
    
    // Check if the row number is valid (1-based index)
    if (rowNumber < 1 || rowNumber > rows.length) {
        console.log(`Row ${rowNumber} does not exist. Total rows: ${rows.length}`);
        return;
    }
    
    // Convert to 0-based index and remove the row
    const rowToDelete = rows[rowNumber - 1];
    rowToDelete.remove();
    
    // Optional: Update the row numbers for all remaining rows
    updateRowNumbers();
}

// Optional helper function to renumber rows after deletion
function updateRowNumbers() {
    const tableBody = document.getElementById('file-table-body');
    const rows = tableBody.querySelectorAll('tr');
    
    rows.forEach((row, index) => {
        // Update the first <th> element (row number)
        const rowNumberCell = row.querySelector('th');
        if (rowNumberCell) {
            rowNumberCell.textContent = index + 1;
        }
    });
}

export function addFileListToTable(fileArray){
  /* example of file array 
  [
  ["meeting_notes.txt", 1345, "2024-06-14"],
  ["budget.xlsx", 450, "2024-06-13"],
  ["presentation.pptx", 1800, "2024-06-12"]
]
  */
  fileArray.forEach(file => {
    addRowToTable(file[0], file[1], file[2]);
   })
}