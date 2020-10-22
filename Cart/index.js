product = document.querySelectorAll(".productId")
fullImage = document.querySelector("#fullImage")
//console.log("src bfr: "+fullImage.getAttribute("src"))
// cartCount = document.querySelector("#cartCount")
// cartCountInt = parseInt(cartCount.textContent)
// console.log("cart count : "+cartCountInt)
for(let i=0;i<product.length;i++){
    
    product[i].addEventListener("click",function(){
        //console.log(product[i].getAttribute("id"))
        //getProductDetails(product[i].getAttribute("id"));
        window.location.href = "productDetail.html"
        // cartCountInt++;
        // console.log("after click cart count: "+cartCountInt)
        // cartCount.textContent = cartCountInt 
    })
   
}

product1={
    Product_Name:"Red Printed T-shirt",
    Price:400,
    Product_Id:"product1",
    Image:"images/product-1.jpg"
}

product2={
    Product_Name:"HRx Men's Shoe",
    Price:899,
    Product_Id:"product2",
    Image:"images/product-2.jpg"
}

localStorage.setItem("product1",JSON.stringify(product1))
localStorage.setItem("product2",JSON.stringify(product2))

// function getProductDetails(productId){
//     value = localStorage.getItem(productId)
//     valueobj = JSON.parse(value)
//     fullImage.setAttribute("src",valueobj.Image)
//     console.log("src bfr: "+fullImage.getAttribute("src"))
// }
// value = localStorage.getItem("product1")
// valueobj = JSON.parse(value)
// console.log(valueobj.Image)
// showPicture = document.querySelector("#showPicture")
// console.log(showPicture.getAttribute("src"))
// showPicture.setAttribute("src",valueobj.Image)
// console.log("after src is"+showPicture.getAttribute("src"))

