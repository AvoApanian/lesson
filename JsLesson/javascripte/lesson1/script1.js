window.onload = (() => {
    console.log("lesson 1 -> 1")
    let value = +prompt("(exe1)\nEnter a number pls:");
    console.log(value > 0 ? `${value} > 0` : value < 0 ? `${value} < 0` : `${value} = 0`);
})