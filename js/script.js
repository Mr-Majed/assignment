// total price selection 
const totalPriceUpdate = document.getElementById('total-price');
let totalLastPrice = document.getElementById('total');


function updatePrice() {
  totalLastPrice.innerHTML = parseFloat(totalPriceUpdate.innerHTML);
}

//---------- memory section



//memory section 
// memory button 

let memory8 = document.getElementById("memory-8");
let memory16 = document.getElementById("memory-16");

// 8gb memory cost function 

memory8.addEventListener("click", function () {
  let price = 0;

  document.getElementById("Extra-memory").innerHTML = price;
  let totalCalculatedPrice = parseFloat(totalPriceUpdate.innerHTML);
  if (memory16PriceValue != 180) {
    totalCalculatedPrice -= 180;
    totalPriceUpdate.innerHTML = totalCalculatedPrice;
    memory16PriceValue = 180;

  }
  updatePrice()
});

// 16gb memory cost function 

let memory16PriceValue = 180;
memory16.addEventListener("click", function () {

  document.getElementById("Extra-memory").innerHTML = memory16PriceValue;
  let totalCalculatedPrice = parseFloat(totalPriceUpdate.innerHTML);

  totalCalculatedPrice += memory16PriceValue;
  totalPriceUpdate.innerHTML = totalCalculatedPrice;
  memory16PriceValue = 0;
  document.getElementById("Extra-memory").innerHTML = 180;
  updatePrice()

});

// storage section 
//***** storage buttons *****/

let storage256 = document.getElementById("storage-256");
let storage512 = document.getElementById("storage-512");
let storage1000 = document.getElementById("storage-1000");



let extraStorageCostPrice = parseFloat(document.getElementById("Extra-storage").innerHTML);


// storage 256gb function 

let storage256GbPriceAdded = 0
storage256.addEventListener("click", function () {

  document.getElementById("Extra-storage").innerHTML = storage256GbPriceAdded;
  if (storage512gbPriceAdded > 0) {
    let totalCalculatedPrice = parseFloat(totalPriceUpdate.innerHTML);
    totalCalculatedPrice -= storage512gbPriceAdded;
    totalPriceUpdate.innerHTML = totalCalculatedPrice;
    storage512gbPriceAdded = 0;

  }
  if (storage1TbPriceAdded > 0) {
    let totalCalculatedPrice = parseFloat(totalPriceUpdate.innerHTML);
    totalCalculatedPrice -= storage1TbPriceAdded;
    totalPriceUpdate.innerHTML = totalCalculatedPrice;
    storage1TbPriceAdded = 0;

  }
  updatePrice()


});


// storage 512gb function 
let storage512gbPriceAdded = 0;
storage512.addEventListener("click", function () {




  console.log(storage512gbPriceAdded);
  extraStorageCostPrice = parseFloat(document.getElementById("Extra-storage").innerHTML);
  if (storage1TbPriceAdded > 0) {
    let totalCalculatedPrice = parseFloat(totalPriceUpdate.innerHTML);
    totalCalculatedPrice -= storage1TbPriceAdded;
    totalPriceUpdate.innerHTML = totalCalculatedPrice;
    storage1TbPriceAdded = 0;

  }
  if (storage512gbPriceAdded === 0) {
    console.log(true);
    storage512gbPriceAdded = 100;
    document.getElementById("Extra-storage").innerHTML = storage512gbPriceAdded;

    let totalCalculatedPrice = parseFloat(totalPriceUpdate.innerHTML);
    totalCalculatedPrice += storage512gbPriceAdded;
    totalPriceUpdate.innerHTML = totalCalculatedPrice;

  }

  updatePrice()

});


// storage 1tb function 
let storage1TbPriceAdded = 0;
storage1000.addEventListener("click", function () {

  console.log(storage1TbPriceAdded);

  if (storage1TbPriceAdded === 0) {
    console.log(true);
    storage1TbPriceAdded = 180;
    document.getElementById("Extra-storage").innerHTML = storage1TbPriceAdded;

    let totalCalculatedPrice = parseFloat(totalPriceUpdate.innerHTML);
    totalCalculatedPrice += storage1TbPriceAdded;
    totalPriceUpdate.innerHTML = totalCalculatedPrice;

  }


  if (storage512gbPriceAdded === 0) {
    console.log(true);
    storage512gbPriceAdded = 100;
    document.getElementById("Extra-storage").innerHTML = storage512gbPriceAdded;

    let totalCalculatedPrice = parseFloat(totalPriceUpdate.innerHTML);
    totalCalculatedPrice += storage512gbPriceAdded;
    totalPriceUpdate.innerHTML = totalCalculatedPrice;

  }
  updatePrice()

});





//delivery option

//delivery button
let delivery0 = document.getElementById("delivery-0");
let delivery20 = document.getElementById("delivery-20");


// without delivery charge 

let primeDeliveryCharge = 0;
delivery0.addEventListener("click", function () {

  document.getElementById("Extra-delivery").innerHTML = primeDeliveryCharge;

  if (FridayDeliveryCharge > 0) {
    let totalCalculatedPrice = parseFloat(totalPriceUpdate.innerHTML);
    totalCalculatedPrice -= FridayDeliveryCharge;
    totalPriceUpdate.innerHTML = totalCalculatedPrice;
    FridayDeliveryCharge = 0;
  }
  updatePrice()
});


// delivery charge included 

let FridayDeliveryCharge = 0;
delivery20.addEventListener("click", function () {


  if (FridayDeliveryCharge === 0) {
    FridayDeliveryCharge = 20;
    document.getElementById("Extra-delivery").innerHTML = FridayDeliveryCharge;
    let totalCalculatedPrice = parseFloat(totalPriceUpdate.innerHTML);
    totalCalculatedPrice += FridayDeliveryCharge;
    totalPriceUpdate.innerHTML = totalCalculatedPrice;
  }
  updatePrice()


});








///total------

function totalPrice() {
  document.getElementById('Extra-memory') = memory
  document.getElementById('Extra-delivery') = delivery
  document.getElementById('Extra-storage') = storage

  product()
  let productTotal = productInput + memory + delivery + storage;
  document.getElementById("total-price").innerHTML = productTotal;
}