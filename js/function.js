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
