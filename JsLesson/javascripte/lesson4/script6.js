window.onload = (() => {
    const people = [
        { name: "Anna", age: 17 },
        { name: "Karen", age: 22 },
        { name: "Aram", age: 15 },
        { name: "Mery", age: 19 }
    ];

    const firstAdult = people.find(item => item.age > 18);
    console.log(firstAdult);

    const adults = people.filter(item => item.age >= 18);
    console.log(adults);

    const names = people.map(item => item.name);
    console.log(names);

})