let potteryId = 1

export const makePottery = (potteryShape, potteryWeight, potteryHeight) => {
    let pottery = {
        id: potteryId,
        shape: potteryShape,
        weight: potteryWeight, 
        height: potteryHeight
    }
    potteryId++
    return pottery
}
