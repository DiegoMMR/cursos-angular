export function whatsMyType<T>(arg: T): T {
    return arg
}

let amIString = whatsMyType<string>("kellogs")
let amINumber = whatsMyType<number>(100)
let amIArray = whatsMyType<number[]>([1,2,3,4,5])

console.log(amIString)
console.log(amINumber)
console.log(amINumber)