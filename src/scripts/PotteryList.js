import { usePottery } from "./PotteryCatalog.js"

export const potteryList = () => {
    let getPottery = usePottery()
    let potteryHTML = ''
    for (const pottery of getPottery) {
        potteryHTML += `<section class="pottery" id="pottery--${pottery.id}">
        <h2 class="pottery__shape">Shape is ${pottery.shape}</h2>
        <div class="pottery__properties">
          Item weighs ${pottery.weight} grams and is ${pottery.height} in height
        </div>
        <div class="pottery__price"> Price is $${pottery.price}</div>
      </section>`;
    }
    return potteryHTML
}




