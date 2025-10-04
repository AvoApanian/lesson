window.onload = (() => {
    let arr = [1,2,3,4,5,6,7,8,9,10]
    arr[arr.length] = 11
    arr.unshift (-1,0)
    arr.pop()
    arr.shift()
    console.log (arr)
})