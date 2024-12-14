console.log('This is saparate js file');
// option 1 : directly set on the html


// option :2 add onclick function
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