function highlight(table) {
  let tBodyRows = table.querySelectorAll("tbody > tr");

  for (let row of tBodyRows) {
    let availability = row.cells[3].dataset.available;

    if (availability === "true") {
      row.classList.add("available");
    } else if (availability === "false") {
      row.classList.add("unavailable");
    } else if (availability === undefined) {
      row.hidden = true;
    }

    let gender = row.cells[2].innerHTML;

    if (gender === "m") {
      row.classList.add("male");
    } else {
      row.classList.add("female");
    }

    if (row.cells[1].innerHTML < 18) {
      row.style.textDecoration = "line-through";
    }
  }
}
