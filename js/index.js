

/*Get Price Function */
function getMemoryCost(cost, extra) {
    const memory8GB = cost;
    const extraMemory = document.getElementById(extra);
    const extraMemoryCost = parseFloat(extraMemory.innerText);
    const memory = memory8GB + extraMemoryCost;
    extraMemory.innerText = memory;
    return memory;
}
/* Total Price function */

/* memory Buttons */
function giveMemoryPrice() {
    document.getElementById('memory-btn1').addEventListener('click', function () {
        const memoryPrice1 = 0;
        const memory = 'memory-cost'
        getMemoryCost(memoryPrice1, memory);

    })
    document.getElementById('memory-btn2').addEventListener('click', function () {
        const memoryPrice2 = 180;
        const memory = 'memory-cost';
        getMemoryCost(memoryPrice2, memory);
    })
}
console.log(giveMemoryPrice())

/* Storage Buttons */
function giveStoragePrice() {
    document.getElementById('storage-btn1').addEventListener('click', function () {
        const storagePrice1 = 0;
        const storage = 'storage-cost'
        getMemoryCost(storagePrice1, storage);
    });
    document.getElementById('storage-btn2').addEventListener('click', function () {
        const storagePrice2 = 100;
        const storage = 'storage-cost'
        getMemoryCost(storagePrice2, storage);
    });
    document.getElementById('storage-btn3').addEventListener('click', function () {
        const storagePrice3 = 180;
        const storage = 'storage-cost'
        getMemoryCost(storagePrice3, storage);
    });
}

/* Delivery */
function giveDeliveryCharge() {
    document.getElementById('delivery-btn1').addEventListener('click', function () {
        const storagePrice3 = 0;
        const storage = 'delivery-cost'
        getMemoryCost(storagePrice3, storage);
    });
    document.getElementById('delivery-btn2').addEventListener('click', function () {
        const storagePrice3 = 20;
        const storage = 'delivery-cost'
        getMemoryCost(storagePrice3, storage);
    });
}

/* Total Price */
const totalCost = parseFloat(document.getElementById('total-price').innerText);
