// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.



let name1: string [] = ["nasir", "ajmair", "ubaid", "shahroz"];
let massage: string = "How are you";

console.log(name1[0] + " " + massage)
console.log(name1[1] + " " + massage)
console.log(name1[2] + " " + massage)
console.log(name1[3] + " " + massage)

let name2: string [] = ["Junaid", "Shahbaz", "Nasir"]
let massage2: string = "send you Mobile number"
console.log(`${name2 [0] + " " + massage2}`)
console.log(`${massage2} ${name2 [1]}`)
console.log(`${name2 [2]  + " " + "send you Mobile number"}`)