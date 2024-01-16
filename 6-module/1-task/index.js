export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.makeTable();
  }

  makeTable() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const headers = document.createElement("tr");
    ["Имя", "Возраст", "Зарплата", "Город", ""].forEach((headerText) => {
      const headerCell = document.createElement("th");
      headerCell.textContent = headerText;
      headers.appendChild(headerCell);
    });
    thead.appendChild(headers);
    table.appendChild(thead);

    this.rows.forEach((rowData) => {
      const tableRow = document.createElement("tr");

      Object.values(rowData).forEach((value) => {
        const tableCell = document.createElement("td");
        tableCell.textContent = value;
        tableRow.appendChild(tableCell);
      });

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "X";
      deleteButton.addEventListener("click", () => tableRow.remove());

      const deleteButtonCell = document.createElement("td");
      deleteButtonCell.appendChild(deleteButton);
      tableRow.appendChild(deleteButtonCell);

      tbody.appendChild(tableRow);
    });

    table.appendChild(tbody);
    return table;
  }
}
