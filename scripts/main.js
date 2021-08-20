const div1 = document.getElementById("first");
const div2 = document.getElementById("second");
const div3 = document.getElementById("third");

const img = document.getElementById("art");

const desc = document.getElementById("desc");
const price = document.getElementById("price");

const free = document.getElementById("free");
const express= document.getElementById("express")

const shippingField = document.getElementById("shipping")

const total = document.getElementById('total')

shippingField.addEventListener('click', function(){
    
})
function isContain(elem){
    // return is class present
    return elem.classList.contains("selected");
}

free.addEventListener('click', function(){
    if(!isContain(free)){
        free.classList.add("selected");
        express.classList.remove("selected")
    }
    shippingField.innerText = '5'
    updateTotal()
})
express.addEventListener('click', function(){
    if(!isContain(express)){
        free.classList.remove("selected");
        express.classList.add("selected")
    }
    shippingField.innerText = '30'
    updateTotal()
})

// update total
function updateTotal(){
    const shippingCharge = Number(shippingField.innerText);
    const productPrice = Number(price.innerText);
    const grandTotal = shippingCharge + productPrice; 
    total.innerText = grandTotal;
}

div1.addEventListener("click", function(){
    if(!isContain(div1)){
        div1.classList.add("selected");
        div2.classList.remove("selected")
        div3.classList.remove("selected")
    }
    // changing image
    img.src = "images/1.jpg"
    // changing description
    desc.innerText = "this is a test text for image 1 this is a test text for image 1 this is a test text for image 1 this is a test text for image 1 this is a test text for image 1 this is a test text for image 1 this is a test text for image 1 this is a test text for image 1 this is a test text for image 1 this is a test text for image 1"
    // changing Total price
    price.innerText = "650"
    // update total
    updateTotal()
});
div2.addEventListener("click", function(){
    if(!isContain(div2)){
        div1.classList.remove("selected");
        div2.classList.add("selected")
        div3.classList.remove("selected")
    }
    img.src = "images/2.jpg"
    desc.innerText = "Second-image: this is a test text for image 1 this is a test text for image 1 this is a test text for image 1 this is a test text for image 1 this is a test text for image 1 this is a test text for image 1 this is a test text for image 1 this is a test text for image 1 this is a test text for image 1 this is a test text for image 1"
    price.innerText = "550"
    updateTotal()
});
div3.addEventListener("click", function(){
    if(!isContain(div3)){
        div1.classList.remove("selected");
        div2.classList.remove("selected")
        div3.classList.add("selected")
    }
    img.src = "images/3.jpg"
    desc.innerText ="Third-image: this is a test text for image 1 this is a test text for image 1 this is a test text for image 1 this is a test text for image 1 this is a test text for image 1 this is a test text for image 1 this is a test text for image 1 this is a test text for image 1 this is a test text for image 1 this is a test text for image 1"
    price.innerText = "450"
    updateTotal()
});