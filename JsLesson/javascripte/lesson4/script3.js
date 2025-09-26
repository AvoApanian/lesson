window.onload = (() => {
    const numbers = [5, 12, 8, 130, 44];

    let newArr = numbers.filter (item => item > 10 && item % 2 == 0)
    console.log(newArr)
})