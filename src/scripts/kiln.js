export const firePottery = (potteryObject, temperature) => {
    //potterObject is an object with the following properties: id,shape,weight,height
    //add a property called fired to potteryObject and set it to true
    potteryObject.fired = true
        if (temperature > 2200) {
            potteryObject.cracked = true 
        } else {
            potteryObject.cracked = false
        }
    return potteryObject
}