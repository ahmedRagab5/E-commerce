
addNav('')
addFoot()

let params = new URLSearchParams(window.location.search);

let id = params.get("id");

var products=JSON.parse(localStorage.getItem('products'))
var details={}

var heartsLocal=JSON.parse(localStorage.getItem('hearts')) || []
var cartsLocal=JSON.parse(localStorage.getItem('carts')) || []




products.forEach(p => {
    if(id===`${p.id}`){
        details=p
    }
});
console.log(details);

let category=document.querySelector('.category')
category.textContent=details.category.name

let img=document.querySelector('.content img')
img.src=details.images[0]

let title=document.querySelector('.info h6')
title.textContent=details.title

let price=document.querySelector('.text-content p')
price.textContent=details.price + '$'

let des=document.querySelector('.des')
console.log(des);

des.textContent=details.description


let heart=document.querySelector('span.heart')
heart.setAttribute('pid',id)
let cart=document.querySelector('span.cart')
cart.setAttribute('pid',id)


editeHeartCart()

let images =document.querySelector('.images')
if (details.images.length>1) {
    details.images.forEach((img)=>{
    let div=document.createElement('div')
    let image=document.createElement('img')
    image.src=img

    div.appendChild(image)
    images.appendChild(div)

})
}


