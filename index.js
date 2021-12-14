let number = 1

while (number <100){
    if (number % 5 == 0 && number % 7 == 0){
console.log('FIZZ BUZZ')
    }

    if  (number % 5 == 0){
        console.log('FIZZ')
    }
else if   (number % 7 == 0){
        console.log('BUZZ')
    }
console.log(number)
number = number +1
}
