window.onload = (() => {
    const numbers = [3, 7, 10, 15, 20, 25];

    let first = numbers.find(item => item < 10);

    console.log(`first number who < 10 in array is ${first}`);
    let division = numbers.find (item => item % 5 == 0);
    console.log(`First number divisible by 5 is ${division}`);
    
})