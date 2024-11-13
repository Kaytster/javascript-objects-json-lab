(() => {
//*Start
console.info("ready");

const staffTable = document.getElementById("staffTable");
fetch("data/staff.json")
  .then(response => response.json())
  .then(data => {
      console.dir(data);
      data.forEach((item) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const emailCell = document.createElement("td");
    nameCell.textContent = `${item.first_name}  ${item.last_name}`;
    emailCell.textContent = item.email;
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    staffTable.appendChild(row);

  // ...
});
    // Work with the parsed data
  })
  .catch(error => {
    // Handle errors here
  });

//*End
})();