const items = document.getElementById('list-items');
const textArea =  document.getElementById('textarea-input');
const totalChar =  document.getElementById('total-char');
const remaining =  document.getElementById('remain');

console.log(items)

let charActerLimit = 50;

function countCharacter(e){
    let inputValue =  textArea.value;
    // console.log(inputValue);
    totalChar.textContent  = inputValue.length;
    remaining.textContent  = textArea.getAttribute('maxLength') - inputValue.length;
}

textArea.addEventListener('keyup' , countCharacter);


items.addEventListener('click' , (e) => {
    if(e.target.innerText == "UpperCase") {
        makeStyle('upperCase');
    }
    
    if(e.target.innerText == "LowerCase"){
         makeStyle('lowerCase');
    }
    if(e.target.innerText == "Bold") {
        makeStyle('bold')
    }
    if(e.target.innerText == "Italic") {
        makeStyle('italic')
    }

});


function makeStyle(text){
    textArea.style.textTransform  = text;
}