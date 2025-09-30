window.onload = (() => {
    let arr = [4,6,2,8,3,7,2,7,9,0,-2,4]
    console.log (exe1(arr))
    console.log (exe2 (arr))
    console.log(exe3([1,2,3],[9,8,7]))
    console.log (exe4("яблоко,банан,киви,груша"))
    console.log(exe5(["Я", "учу", "JS"]))
    console.log (exe6(["html","css","js"]))
    console.log (exe7(arr,7))
    console.log(exe8([10,20,30,40,50]))
    exe9()
    console.log (exe10("Привет как дела"))
    console.log (exe11(["cat", "dog", "hamster", "parrot"]))
})

function exe1 (arr) {
    arr.splice(2,1)
    return arr
}

function exe2 (arr) {
    arr.splice(0, 3, 53, 232, 534)
    return arr 
}

function exe3 (arr,arr2) {return arr.concat(arr2).reverse();}
function exe4(str){return str.split(",")}
function exe5 (arr) {return arr.join(" ")}
function exe6 (arr) {return arr.includes("js")}
function exe7 (arr,value) {return arr.includes(value)}

function exe8 (arr){
    arr.splice(1,3)
    return arr
}

function exe9() {
    let colors = ["red", "green", "blue", "yellow"];
    let index = colors.indexOf("blue");
    if (index !== -1) {
        colors.splice(index, 1, "purple");
    }

    console.log(colors); 
}



function exe10 (str){return str.split(" ").reverse().join(" ");}
function exe11 (str){return str.filter(item => item.includes("r"));}