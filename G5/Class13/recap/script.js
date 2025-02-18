// Callbacks

function macedoniaTax(price){
    return price * 0.18 // 18% tax in Macedonia   
};

function greeceTax(price){
    return price * 0.24 // 18% tax in Greece
};

function taxFree(){
    return 0
}


const calculateTotalPrice = (price, taxCallback) => {
    const tax = taxCallback(price) // here either we gonna call macedoniaTax or greeceTax
    
    const priceWithTax = price + tax;

    return priceWithTax;
};

const price = 200;

const totalPriceWithGreeceTax = calculateTotalPrice(price, greeceTax);
console.log(`Total price with Greece tax is: ${totalPriceWithGreeceTax}`);

const totalPriceWithMacedoniaTax = calculateTotalPrice(price, macedoniaTax);
console.log(`Total price with Macedonia tax is: ${totalPriceWithMacedoniaTax}`)

const totalPriceWithTaxFree = calculateTotalPrice(price, taxFree);
console.log(`Total price in tax free region is: ${totalPriceWithTaxFree}`);


console.log('---- VERSION 2 ----')

const taxOperations = {
    MKD: macedoniaTax,
    GR: greeceTax
}


const calculateTotalPrice2 = (price, country) => {
    const taxOperation = taxOperations[country] // taxOperation[MKD]
    let tax = taxOperation(price)

    
    const priceWithTax = price + tax;

    return priceWithTax;
};

console.log(calculateTotalPrice2(price, "MKD"))
console.log(calculateTotalPrice2(price, "GR"))


let dummyObj = {
    index: 0,
    result: {
        name: 'John'
    }
}

console.log(dummyObj["index"])
console.log(dummyObj["result"]["name"])
console.log(dummyObj.result.name)

console.log('--- PROMISES ---');

/**
 * 1. Pending
 * 2. Fullfilled
 * 3. Rejected
 */
function canIEnterDisco(personAge){
    return new Promise((resolve, reject) => {
        // Logic of the promise
        if(personAge >= 18){
            resolve('You may enter the disco!') // we gonna fullfill the promise (fullfilled state)
        }else {
            reject('The user is not adult!')  // we gonna reject the promise (rejected state)
        }
    })
}

console.log("1")
// In order to read the value returned from the promise
// we must RESOLVE IT
canIEnterDisco(20)
.then((result) => {
    console.log(result)
    // THIS then CHAINED METHOD WILL EXECUTE IF THE PROMISE REACHES FULLFILLED STATE
    console.log('Promise resolved and we are in fullfilled state');
})
.catch((e) => {
    // THIS catch CHAINED METHOD WILL EXECUTE ONLY IF THE PROMISE REACHES REJECTED STATE
    console.log('Promise is rejected')
    console.error(e)
})


console.log("2")