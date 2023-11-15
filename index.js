const fs = require('fs');
const Papa = require('papaparse');

const contents = fs.readFileSync('./orders.csv', 'utf8');

const config = {
  header: true,
}
const data = Papa.parse(contents, config);
console.log(data.data.slice(0, 2));