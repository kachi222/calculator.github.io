const allButton = document.querySelectorAll('button');
console.log(allButton);
function getInputValue() {
    let input = event.target.innerText;
    console.log(input)
    printValue(input);
}

let out = document.querySelector('#result');


// Making a function that prints the value on screen
function printValue(val) {
    let current = out.innerHTML;

    if(out.innerHTML == "0")
    {
        if(val !="C" && val !="DEL"){
            out.innerHTML = "";
            out.innerHTML += val;
        }
    }else{
        if(val == "DEL"){
            out.innerHTML = current.slice(0, -1);
            if(out.innerHTML.length <=1){
                out.innerHTML = "0";
            }
        }
        if(val!= "C" && val!="DEL" && val!="="){
            out.innerHTML += val;
        }
        if(val =="C"){
            out.innerHTML = "0";
        }
        
       
        
       
        // now we will apply the formula and for this we will use eval that returns result
        if(val =="="){
            let res = out.innerHTML;
            out.innerHTML = eval(res);
        }

    }
      
}

if (out.textContent.includes('EXP')){
    let first = out.textContent.search(/exp/g);
    console.log(first);
    Math.exp();
}
var exp = document.querySelector('#exp')
exp.addEventListener('click',()=>{
    out.innerHTML = Math.pow(out.innerHTML, 2);
    // if(out.innerHTML == "number"){
    //     out.innerHTML.slice(0,3)
    // }
})
var square = document.querySelector('#square');

square.addEventListener('click', () => {
    out.innerHTML = Math.sqrt(out.innerHTML, 2);
})


let buttons = document.querySelectorAll('[data-button]');
for(var i = 0; i<buttons.length;i++){
    buttons[i].setAttribute('onclick', 'getInputValue()'); 
};
