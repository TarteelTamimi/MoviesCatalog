const fs = require('fs');
const prompt = require("prompt-sync")();

let link = prompt("Enter API link:    //use (https://api.npoint.io/a12ac8f1570d9af1538e)  ");

fetch(link)
  .then(response => response.json())
  .then(data => {
    const jsonData = JSON.stringify(data);

    fs.writeFile('movies.json', jsonData, 'utf8', err => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Data successfully written to file');
      }
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

