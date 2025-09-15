window.load = (() => {
    let sum = 0;

    for (let i = 1; i <= 40; i++) {
        if (i % 2 === 0) {  
            sum += i;
        }
    }

    console.log("sum 1 -> 40 ==:", sum);

})