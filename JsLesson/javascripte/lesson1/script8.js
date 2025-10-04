window.onload = (() => {
    let product = 1; 

    for (let i = 1; i <= 60; i++) {
        if (i % 6 === 0) {
            product *= i;
        }
    }

    console.log("exe 8 ", product);
})