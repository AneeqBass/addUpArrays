let calculate = document.querySelector('#calculate')
let answer = document.querySelector('#answer')
let input = document.querySelector('#input')

function sum(total, num){
    return total + +num
}

calculate.addEventListener('click', ()=>{
    const numbers = input.value.split(",")
    let sumOfNumbers = numbers.reduce(sum,0)
    answer.textContent = sumOfNumbers
    console.log(numbers)
})