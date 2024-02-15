const fs = require("fs");

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}

// const bookJSON = JSON.stringify(book);
// console.log(book.title);
// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);

// fs.writeFileSync('data.json', bookJSON);

// const dataBuffer = fs.readFileSync('data.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

data.title = 'Nutuk';
data.author = 'Mustafa Kemal Atatürk';
const bookJSON = JSON.stringify(data);
fs.writeFileSync('data.json', bookJSON);