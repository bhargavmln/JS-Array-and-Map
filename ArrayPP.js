//Find 2nd max and 2nd min without sort
{
    function findMax(array) {
        let max = 0;
        for (let a of array) {
            if (a >= max) max = a;
        }
        return max;
    }
    function findMin(array) {
        let min = 1000;
        for (let a of array) {
            if (a <= min) min = a;
        }
        return min;
    }
    let numbers = [];
    for (i = 0; i < 10; i++) {
        let num = Math.floor(Math.random() * 909) + 100;
        numbers.push(num);
    }
    console.log(numbers);
    let max = findMax(numbers);
    let min = findMin(numbers);
    numbers.splice(numbers.indexOf(max), 1);
    numbers.splice(numbers.indexOf(min), 1);
    console.log("2nd Max number without sort is: " + findMax(numbers));
    console.log("2nd Min number without sort is: " + findMin(numbers));
}

//Find 2nd max and 2nd min with sort
{
    let numbers = [];
    for (i = 0; i < 10; i++) {
        let num = Math.floor(Math.random() * 909) + 100;
        numbers.push(num);
    }
    numbers.sort((a, b) => a - b);
    console.log("Sorted Array: ");
    console.log(numbers);
    console.log("2nd Max number with sort is: " + numbers[8]);
    console.log("2nd Min number with sort is: " + numbers[1]);

}

//Get the prime factors of a number

{
    function isPrime(num) {
        let prime = true;
        for (let i = 2; i < num; i++) {
            if (num % i == 0) prime = false;
        }
        return prime;
    }
    let number = 60;
    let primeFactors = [];
    for (i = 2; i <= number; i++) {
        if (isPrime(i) && number % i == 0) {
            primeFactors.push(i);
        }
    }
    console.log("The prime factors of " + number + " are: " + primeFactors);
}

//Check if sum of three integers is zero
{
    let numArray = [];
    for (i = 0; i < 3; i++) {
        let num = Math.floor(Math.random() * 10) % 3;
        numArray.push(num);
    }
    console.log("The three numbers are: " + numArray);
    const total = (a, b) => a + b;
    console.log("Sum: " + numArray.reduce(total));
}

//To get numbers like 11,22,33,44 till 100
{
    function palindromeCheck(number1) {
        let number = 0;
        let r = 0;
        number2 = number1
        let check = false
        while (number1 > 0) {
            r = number1 % 10;
            number = number * 10 + r;
            number1 = Math.floor(number1 / 10);
        }
        if (number == number2) { check = true; }
        return check;
    }
    let array = [];
    for (i = 10; i < 100; i++) {
        if (palindromeCheck(i)) {
            array.push(i);
        }
    }
    console.log(array);
}