const sellingPottery = []

export const toSellOrNotToSell = (potteryObject) => {
    if (potteryObject.cracked == false) {
        if (potteryObject.weight >= 6) {
            potteryObject.price = 40;
        }
        else {
            potteryObject.price = 20;
        }
        sellingPottery.push(potteryObject)
    }
    return potteryObject
}

export const usePottery = () => {
    let potteryCopy = [...sellingPottery]
    return potteryCopy
}

