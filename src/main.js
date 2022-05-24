const display = document.querySelector('#display')

function myDisplay(display){
    setTimeout(() => {
        display.clear()
    }, 4000);
}

myDisplay()


// var i = 0;

// function brackets(){
//         if(i == 0){
//             calculator.display.value += '(';
//             i = 1;	
//         }
//         else if(i == 1){
//             calculator.display.value += ')';
//             i = 0;
//         }
// }
function backspace(){
    var x = calculator.display.value; 
    if(x.length > 0){
        x = x.substring(0, x.length-1); 
        calculator.display.value = x;
    }
}




