import { hide, show, showLoggedOnly, hideUnloggedOnly } from "./PageAppearance.js"; 
import { hideModal } from "./PageAppearance.js";    

//------------------
//-----FILE TABLE FUNCTIONS-------
//------------------    

//adding row to FILE table
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

export function handleLogIn(){
    showLoggedOnly();
    hideUnloggedOnly();
    hideModal("my_modal");
}