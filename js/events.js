// Option 1: directly set on the html element
//<button onclick="console.log(10)">Click Me!</button> 

// Option 2: add  onclick function on the html element
//<button onclick="makeRed()">Make red</button>
function makeRed() {
    document.body.style.backgroundColor="red";
};

// Option 3: another
const makeBlueButton = document.getElementById("Make-blue");
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = "blue";
};

// Option 4:
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
};

// Option 5:
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = "green";
})

