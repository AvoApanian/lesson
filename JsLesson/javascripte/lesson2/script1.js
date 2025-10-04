window.onload = (() => {
    

    let number = 15;
    console.log("lesson 1 -> exe 1\noutput ->", sumOddNumbers(number));

})

function sumOddNumbers(limit) {
        let sum = 0;

        for (let i = 1; i <= limit; i += 2) { 
            sum += i;
        }

        return sum;
    }