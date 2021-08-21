//---------- memori sectionlet

let memory8 = document.getElementById("memory-8");
let memory16 = document.getElementById("memory-16");

//---storage buttons

let storage256 = document.getElementById("storage-256");
let storage512 = document.getElementById("storage-512");
let storage1000 = document.getElementById("storage-1000");

//-----delivery button
let delivery0 = document.getElementById("delivery-0");
let delivery20 = document.getElementById("delivery-20");

// memory16.addEventListener("click", function () {
//   const memoryInput16 = document.getElementById("total-price").innerHTML;
//   const memoryNumber16 = parseInt(memoryInput16);
//   const memoryPrice = 180;
//   let newMemoryTotal = memoryNumber16 + memoryPrice;
//   document.getElementById("total-price").innerHTML = newMemoryTotal;

//   document.getElementById("Extra-memory").innerHTML = memory16Price;
//   //   console.log(newMemoryTotal);
// });

//----------------

function product(price) {
  const productInput = parseInt(
    document.getElementById("total-price").innerHTML
  );
  const productPrice = price;
//   let productTotal = productInput + productPrice
}

//memory------------

memory8.addEventListener("click", function () {
  let price = 0;
  product();
  document.getElementById("Extra-memory").innerHTML = price;
});

memory16.addEventListener("click", function () {
  let price = 180;
  product();
  document.getElementById("Extra-memory").innerHTML = price;
});

//storage---------

storage256.addEventListener("click", function () {
  let price = 0;
  product();
  document.getElementById("Extra-storage").innerHTML = price;
});
storage512.addEventListener("click", function () {
  let price = 100;
  product();
  document.getElementById("Extra-storage").innerHTML = price;
});
storage1000.addEventListener("click", function () {
  let price = 180;
  product();
  document.getElementById("Extra-storage").innerHTML = price;
});

//---delivery optioon

delivery0.addEventListener("click", function () {
  let price = 0;
  product();
  document.getElementById("Extra-delivery").innerHTML = price;
});
delivery20.addEventListener("click", function () {
  let price = 20;
  product();
  document.getElementById("Extra-delivery").innerHTML = price;
});

///total------

function totalPrice(){
    document.getElementById('Extra-memory') = memory
    document.getElementById('Extra-delivery')= delivery
    document.getElementById('Extra-storage') = storage

    product()
    let productTotal = productInput + memory + delivery + storage;
    document.getElementById("total-price").innerHTML = productTotal;
}


//------

//----------storage
// storage512.addEventListener("click", function () {
//   const storage512Input = document.getElementById("total-price");
//   const storage512Number = parseInt(storage512Input);
//   const storage512Price = 100;
//   let newStorageTotal = storage512Number + storage512Price;
//   document.getElementById("total-price").innerHTML = newStorageTotal;

//   document.getElementById("Extra-storage").innerHTML = storage512Price;
//   console.log(storage512Price);
// });
// storage1000.addEventListener("click", function () {
//   const storage1000Input = document.getElementById("total-price");
//   const storage1000Number = parseInt(storage1000Input);
//   const storage1000Price = 180;
//   let newStorageTotal = storage1000Number + storage1000Price;
//   document.getElementById("total-price").innerHTML = newStorageTotal;

//   document.getElementById("Extra-storage").innerHTML = storage1000Price;
//   console.log(storage1000Price);
// });

//---------------promo btn--- promo discount-----------
/*
const promoBtn = document.getElementById("promo-btn");
promoBtn.addEventListener("click", function () {
  const promoCode = document.getElementById("promo-code").value;

  if (promoCode == "stevekaku") {
    cosnt
  } 
});
*/
