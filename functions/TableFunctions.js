//file table sorting


function sortTable(columnIndex, isNumeric = false, isDate = false) {
  const tbody = document.getElementById('file-table-body');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((a, b) => {
    let aText = a.children[columnIndex].textContent.trim();
    let bText = b.children[columnIndex].textContent.trim();

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
}

export function initializeTableSorting() {
document.querySelectorAll('thead th').forEach((th, index) => {
  if (index === 4) return; // skip Actions column

  th.addEventListener('click', () => {
    if (index === 0) sortTable(0, true);        // # (numeric)
    if (index === 1) sortTable(1);              // File Name (text)
    if (index === 2) sortTable(2, true);        // Size (numeric after cleaning)
    if (index === 3) sortTable(3, false, true); // Uploaded (date)
  });
});}