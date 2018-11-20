const arr = [26, 24, 50];


const testIfTri = (a, b ,c) =>{
    if ( Math.pow(a,2) + Math.pow(b,2) == Math.pow(c,2) ){
        return console.log("its a right tri")
        //return console.log(Math.pow(c,2))
    } else if( a+ b > c && c + b > a && c + a > b){
        return console.log("its a tri")       
    } 
    else{
        return console.log("its not a trinagle")
    }
}

testIfTri(...arr)

////////////////////////
const triAreaDiv = document.getElementById('triArea');

const drawTri = (a, b ,c) => {
    const triDiv = document.createElement('div');
    triDiv.style.height = 0 + 'px';
    triDiv.style.width = 0 + 'px';
    triDiv.style.borderBottom =  a + 'px solid #000';
    triDiv.style.borderLeft =  b + 'px solid transparent';
    triDiv.style.borderRight =  c + 'px solid transparent';
    triAreaDiv.appendChild(triDiv);
}

drawTri(...arr)

const arr2 = [...arr, ...arr]
console.log(arr2);
// expected output: 42


const imgBtn = document.querySelector('.imgButton');

const imgToggle = () =>{
    let mySrc = imgBtn.getAttribute('src');
    if(mySrc === 'https://www.mozilla.org/media/img/logos/firefox/logo-quantum-wordmark-white.bd1944395fb6.png') {
        imgBtn.setAttribute ('src','https://www.google.co.uk/chrome/static/images/chrome-logo.svg'); // change image src
    } else {
        imgBtn.setAttribute ('src','https://www.mozilla.org/media/img/logos/firefox/logo-quantum-wordmark-white.bd1944395fb6.png');
    }
}
imgBtn.onclick = imgToggle;

const userBtn = document.querySelector('.userButton');
const myHeading = document.querySelector('.heading');
const setUserName = () => {
    var myName = prompt('Please enter your name.'); // pop up input
    localStorage.setItem('name', myName); // store the data
    myHeading.textContent = 'Mozilla is cool, ' + myName; // out put the text
    checkIfUserEnter();
}

const checkIfUserEnter = () =>{
    if(!localStorage.getItem('name')) { // check is it empty 
        setUserName(); // ask again
      } else {
        let storedName = localStorage.getItem('name'); // update store data
        myHeading.textContent = 'Mozilla is cool, ' + storedName; 
      }
}

userBtn.onclick = setUserName;