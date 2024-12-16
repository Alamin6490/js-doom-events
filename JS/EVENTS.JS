console.log('This is saparate js file');
// option 1 : directly set on the html
//<button onclick ="console.log(9)">Kiss me</button>


// option :2 add onclick function on the html element
// IMPORTANT : WE WILL USE THIS
//<button onclick="makeRed()">Make Red</button>

function makeRed(){
    document.body.style.background = 'red';
} 

// option :3
const makeBlueButton = document.getElementById('make-blue');
        makeBlueButton.onclick = makeBlue;

        function makeBlue(){
            document.body.style.backgroundColor = 'blue';
        }
         

// option :3 another 
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makepurple(){
    document.body.style.backgroundColor = 'purple';
}
// option :4  
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);
function makePink(){
    document.body.style.backgroundColor = 'pink';
}


// option :4  another
const makeGreenButton = document.getElementById('make-green');
         makeGreenButton.addEventListener('click',function makegreen(){
          
            document.body.style.backgroundColor = 'green';
         })

// OPTION : 4 FINAL 
// IMPORTNT : WE WILL USE THIS 
document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenrod';
  })