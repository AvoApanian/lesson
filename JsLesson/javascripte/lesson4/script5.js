window.onload = (() => {
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(item=> item * 2);
    const plus10 = numbers.map (item => item + 10);
    console.log (plus10);
})