// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called


//returns random number from 1 to 256 to be used in backgound color genetation
function randomRGB() {
  return Math.floor(Math.random() * 256);
}

//return random hexadecimal color value
function randomColor() {
  let color = 'rgb(';
  color += randomRGB() + ",";
  color += randomRGB() + ",";
  color += randomRGB() + ")";
  return color;
}

//genertates array of random number that don't repeat the same length of the given array
function getRandomArray(array) {
  let order = [];
  let randomNumber = Math.floor((Math.random() * array.length));
  order.push(randomNumber);
  while (order.length < array.length) {
    randomNumber = Math.floor((Math.random() * array.length));
    if (order.indexOf(randomNumber) === -1) {
      order.push(randomNumber);
    }
  }
  return order;
}

//print all quotes in console to prove quotes aren't repeating
function addToConsole() {
  for (let i = 0; i < quotes.length; i += 1) {
    console.log(quotes[i].words);
  }
}

//set the first array order and set the position to 0
let order = getRandomArray(quotes);
let position = 0;

//print a quote
function printQuote() {
  if (position < order.length) {
    let color = randomColor();
    document.body.style.background = color;
    document.getElementById("loadQuote").style.background = color;
    let value = order[position];
    var selectedQuotes = quotes[value];
    var report = '<p class="quote">' + selectedQuotes.words + '</p>';
    report += '<p class="source">' + selectedQuotes.source;
    report += '<span class="citation">' + selectedQuotes.citation + '</span>';
    report += '<span class="year">' + selectedQuotes.year + '</span></p>';
    document.getElementById('quote-box').innerHTML = report;
    position += 1;
    addToConsole();
  } else if (position === order.length) {
    position = 0;
    order = getRandomArray(quotes);
    color = randomColor();
    document.body.style.background = color;
    document.getElementById("loadQuote").style.background = color;
    value = order[position];
    selectedQuotes = quotes[value];
    report = '<p class="quote">' + selectedQuotes.words + '</p>';
    report += '<p class="source">' + selectedQuotes.source;
    report += '<span class="citation">' + selectedQuotes.citation + '</span>';
    report += '<span class="year">' + selectedQuotes.year + '</span></p>';
    document.getElementById('quote-box').innerHTML = report;
    addToConsole();
  }
}

//will make the printquote function execute every 3 seconds
const intervalID = window.setInterval(printQuote, 30000);

//function that is connected to the button and does the above functions
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
