// Option 1: directly set on the html element
//<button onclick="console.log(10)">Click Me!</button> 

// Option 2: add  onclick function on the html element
//<button onclick="makeRed()">Make red</button>
function makeRed() {
    document.body.style.backgroundColor="red";
}

// Option 3: another
const makeBlueButton = decument.getElementById('Make-blue');
makeBlueButton.onclick = MakeBlue;