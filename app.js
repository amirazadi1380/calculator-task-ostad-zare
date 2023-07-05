const myInput = document.getElementById('userInput')
const numbers = document.querySelectorAll('.number')

numbers.forEach(number=>number.addEventListener('click',()=>{



    switch(number.textContent)
    {
        case "=":
            display: myInput.value =  eval(myInput.value)
            break;
        case "C":
            display: myInput.value = ""
            break;
             default: myInput.value += number.textContent
             break;
    }
}))