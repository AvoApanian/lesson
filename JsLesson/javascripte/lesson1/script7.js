window.onload = (() => {
    let sum = 0;
    let i = 1; 

    while (i <= 40) {
        sum += i;
        i += 2; 
    }

    console.log("sum gent ", sum);

})