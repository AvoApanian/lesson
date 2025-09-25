window.onload = (() => {
    obj = {
        "key1":"hello",
        "key2":undefined,
        "key3":123,
        "key4":undefined
    }

    obj = JSON.parse(JSON.stringify(obj));
    orWeCan(obj)
    weCanAlso(obj)

    console.log (obj)
})

function orWeCan (obj) {
    for (let key in obj) {
        if (obj[key] === undefined) {
            delete obj[key];
        }
    }
}

function weCanAlso (obj) {
        obj = Object.fromEntries(
        Object.entries(obj).filter(([_, value]) => value !== undefined)
    );
}