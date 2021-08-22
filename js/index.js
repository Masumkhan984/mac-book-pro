/* Total */
function totalPrice() {
    const bestPriceText = document.getElementById('best-price');
    const bestPriceCost = parseFloat(bestPriceText.innerText);

    const memoryText = extraMemory.innerText;
    const memoryCost = parseFloat(memoryText);

    const storageText = extraStorage.innerText;
    const storageCost = parseFloat(storageText)

    const deliveryText = delivery.innerText;
    const deliveryCost = parseFloat(deliveryText);

    const totalCost = bestPriceCost + memoryCost + deliveryCost + storageCost;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = totalCost;
    totalPrice2()
}

/* Memory */
const btn1 = document.getElementById('memory-btn1');
const btn2 = document.getElementById('memory-btn2');
const extraMemory = document.getElementById('memory-cost');

btn1.addEventListener('click', function () {
    extraMemory.innerText = "0";
    totalPrice()
})
btn2.addEventListener('click', function () {
    extraMemory.innerText = "180";
    totalPrice()
})

/* Storage */
const extraStorage1 = document.getElementById('storage-btn1');
const extraStorage2 = document.getElementById('storage-btn2');
const extraStorage3 = document.getElementById('storage-btn3');
const extraStorage = document.getElementById('storage-cost');

extraStorage1.addEventListener('click', function () {
    extraStorage.innerText = '0';
    totalPrice()
})
extraStorage2.addEventListener('click', function () {
    extraStorage.innerText = '100';
    totalPrice()
})
extraStorage3.addEventListener('click', function () {
    extraStorage.innerText = '180';
    totalPrice()
})

/* Delivery */
const delivery1 = document.getElementById('delivery-btn1');
const delivery2 = document.getElementById('delivery-btn2');
const delivery = document.getElementById('delivery-cost')

delivery1.addEventListener('click', function () {
    delivery.innerText = '0'
    totalPrice()
})
delivery2.addEventListener('click', function () {
    delivery.innerText = '20'
    totalPrice()
})

/* Total 2 */
function totalPrice2() {
    const totalPrice2Text = document.getElementById('total');
    const totalPrice1Text = document.getElementById('total-price');
    totalPrice2Text.innerText = totalPrice1Text.innerText;
}

/* Promo Code */
const promoBtn = document.getElementById('promo-btn');
promoCode.addEventListener('keyup', function (event) {
    const promoCode = document.getElementById('promo-input');
    if (promoCode.innerText == 'stevekaku') {

    }
})