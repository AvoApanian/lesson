class HommeWork1 {
    exe1():number {
        const num = Number(prompt("Enter a number:"))
        return num > 0 ? 1 : num < 0 ? -1 : 0;
    }

    exe2(a:number,b:number):boolean {return (a + b) < 4}

    exe3():void{
        for (let i :number = 10; i <= 40; i += 2) {
            console.log(i);
        }
    }

    exe4():void{
        const num = Number(prompt("Enter a u number:"))
        for (let i :number = 1;i<=10;i++){
            console.log(`${num} * ${i} = ${num * i}`)
        }
    }

    exe5():number {
        let sum :number = 0;
        for (let i:number = 0;i<=14;i++){
            sum += i
        }

        return sum
    }

    exe6():number {
        let sum :number =0;
        for (let i:number = 0;i<40;i++){
            if (i % 2 == 0){
                sum += i
            }
        }

        return sum;
    }

    exe7():number {
        let sum :number = 0;
        for (let i:number = 0;i<40;i++){
            if (i % 2 != 0){
                sum += 1;
            }
        }
        return sum;
    }

    exe8():number {
        let sum = 1;

        for (let i = 1; i <= 60; i++) {
            if (i % 6 === 0) {
                sum *= i;
            }
        }

        return sum;
    }
}

// const hw1 = new HommeWork1();
// console.log("exe1:", hw1.exe1());
// console.log("exe2 (2+1<4):", hw1.exe2(2, 1));
// console.log("exe3:"); 
// hw1.exe3();
// console.log("exe4:"); 
// hommeWork1.exe4();
// console.log("exe5:", hw1.exe5());
// console.log("exe6:", hw1.exe6());
// console.log("exe7:", hw1.exe7());
// console.log("exe8:", hw1.exe8());


class HommeWork2 {
     exe1(n:number): number {
        let sum :number = 0;
        for (let i:number = 1;i <=n;i++){
            if (i % 2 != 0){
                sum += i;
            }
        }

        return sum;
    }

    exe2 (n:number):boolean {return n % 5 === 0;}

    exe3 (a:number,b:number){
        if (a % 2 == 0 && b % 2 == 0){return a + b}
        else {return a * b}
    }

    exe4 (n:number):boolean {return n > 0}
}

// const hw2 = new HommeWork2()
// hw2.exe1(5);
// hw2.exe2(5);
// hw2.exe3(10,20);
// hw2.exe4(10);


class HommeWork3 {
    exe1(): void {
        interface Person {
            "name":string,
            "age":number,
            "city"?:string
            "isStudent"?:boolean
        }

        let person:Person = {
            name: "Gavi",
            age: 21,
            city: "barcelone"
        }

        person.isStudent = false;
        delete person.city;

        if ("age" in person && person.age > 18) {
            console.log(true);
        } else {
            console.log(false);
        }
        console.log(person);
    }

    exe2(obj:Record<string,any>):void {
        for (const i in obj){
            if (i == undefined){
                delete obj[i]
            }
        }
    }
}

const hw3 = new HommeWork3();
hw3.exe1();
const obj = {
    key1: "hello",
    key2: undefined,
    key3: 123,
    key4: undefined
};
hw3.exe2(obj)


class HommeWork4 {
    exe1 ():void{
        let arr:number[] = [1,2,3,4,5]
        arr.push(6);
        arr.unshift(0, -1);
        arr.pop();
        arr.shift();
        console.log(arr)
    }

    exe2():void {
        let arr:number[] = [3,7,10,15,20,25];
        const var1 = arr.find(item => item > 10)
        const var2 = arr.find(item => item % 5 === 0)
    }

    exe3():void {
        let arr:number[] = [5, 12, 8, 130, 44];
        const var1 = arr.filter(item => item > 10);
        const var2 = arr.filter(item => item % 2 === 0)
    }

    exe4():void {
        let arr:string[] = ["spray", "limit", "elite", "exuberant", "destruction", "present"]
        const var1 = arr.filter(item => item.length > 6)
    }

    exe5():void {
        let arr:number[] = [1,2,3,4,5]
        const doubled = arr.map(item => item * 2);
        const plusTen = arr.map(item => item + 10);
    }

    exe6():void {
        const people = [
            { name: "Anna", age: 17 },
            { name: "Karen", age: 22 },
            { name: "Aram", age: 15 },
            { name: "Mery", age: 19 }
        ];

        const firstAdult = people.find(person => person.age > 18);
        const adults = people.filter(person => person.age >= 18);
        const names = people.map(person => person.name);
    }
}

