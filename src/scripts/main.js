// Imports go first
import {makePottery} from "./PotteryWheel.js"
import { firePottery } from "./kiln.js"



// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", "3 lb", "6 inches")
// console.log(mug)

let platter = makePottery("platter", "7 lb", "12 inches")
// console.log(platter)


let bowl = makePottery("bowl", "2lbs", "2 inches")
// console.log(bowl)

let ashtray = makePottery("ashtray", "10 lbs", "1 inch")
// console.log(ashtray)

let plate = makePottery("plate", "2lbs", "6 inches")
// console.log(plate)

// Fire each piece of pottery in the kiln
//fired should be true for all of these
//firedBowl.Cracked = false
let firedBowl = firePottery(bowl, 1900)
console.log(firedBowl)
//firedAshtray.cracked = true
let firedAshtray= firePottery(ashtray, 3000)
console.log(firedAshtray)
//firedPlatter.cracked = false
let firedPlatter = firePottery(platter, 2100)
console.log(firedPlatter)
//firedPlate.cracked = false
let firedPlate = firePottery(plate, 2000)
console.log(firedPlate)
//firedMug.cracked = true
let firedMug = firePottery(mug, 2500)
console.log(firedMug)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list


