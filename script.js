const csStyl = document.getElementById('list-items');
const textArea =  document.getElementById('textarea-input');
const totalChar =  document.getElementById('total-char');
const remaining =  document.getElementById('remain');

console.log(textArea)

let charActerLimit = 50;

function countCharacter(e){
    let inputValue =  textArea.value;
    // console.log(inputValue);
    totalChar.textContent  = inputValue.length;
    remaining.textContent  = textArea.getAttribute('maxLength') - inputValue.length;
}

textArea.addEventListener('keyup' , countCharacter);


