// Imports go first
import {makePottery} from "./PotteryWheel.js"
import { firePottery } from "./kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { potteryList } from "./PotteryList.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 3, 6)
let platter = makePottery("platter", 7, 12)
let bowl = makePottery("bowl", 2, 2)
let ashtray = makePottery("ashtray", 10, 1)
let plate = makePottery("plate", 2, 6)

// Fire each piece of pottery in the kiln
//fired should be true for all of these
//firedBowl.Cracked = false
let firedBowl = firePottery(bowl, 1900)
//firedAshtray.cracked = true
let firedAshtray= firePottery(ashtray, 3000)
//firedPlatter.cracked = false
let firedPlatter = firePottery(platter, 2100)
//firedPlate.cracked = false
let firedPlate = firePottery(plate, 2000)
//firedMug.cracked = true
let firedMug = firePottery(mug, 2500)

// Determine which ones should be sold, and their price
//Logic error: No price property is being added
const sellFiredBowl = toSellOrNotToSell(firedBowl)
const finalPlatter = toSellOrNotToSell(firedPlatter)
const fantasyPlate = toSellOrNotToSell(firedPlate)
const sellFiredAshtray = toSellOrNotToSell(firedAshtray)
const sellFiredMug = toSellOrNotToSell(firedMug)

// Invoke the component function that renders the HTML list
const productHTML= document.querySelector(".potteryList")
productHTML.innerHTML= potteryList()
