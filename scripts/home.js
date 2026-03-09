var products= JSON.parse(localStorage.getItem("products"));
// 'https://api.escuelajs.co/api/v1/products'
if (!(products)) {
    fetch('../data.json')
  .then(r => r.json())
  .then(d => {console.log(d);
    products=d
    localStorage.setItem("products",JSON.stringify(d))
    // location.reload();
  })
  .catch(e => console.log(e));
// console.log(localStorage.getItem("products"));

  products= JSON.parse(localStorage.getItem("products")) || []
}


    var header=document.getElementById('header')
   
 addNav("home")
 addFoot()


var heartsLocal=JSON.parse(localStorage.getItem('hearts')) || []
var cartsLocal=JSON.parse(localStorage.getItem('carts')) || []

var heartCount =document.querySelector('span.heart-count')
var cartCount =document.querySelector('span.cart-count')

var hearts=document.querySelectorAll('.heart')
var carts=document.querySelectorAll('.cart')

var p=document.getElementById('products')

var ids = []
let i =0
while (i<10) {
    let id=Math.floor(Math.random()*50)
    while (ids.includes(id)) {
        id=Math.floor(Math.random()*50)
    }
    ids.push(id)
    if (products[id].images.length>1) {
         p.innerHTML +=`
            <div class="card">
                <div class="discount">26%</div>
                <a href="details.html?id=${products[id].id}"><img src="${products[id].images[0]}" alt=""></a>
                <div class="stars">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <h4>${products[id].title}</h4>
                <div class="price">
                <span class="new-price">${products[id].price}$</span>
                <span class="old-price">${products[id].price+ 50}$</span>
                </div>
                <div class="buttons">
                    <span class="heart heart-count" pid="${id}"><i class="fa-solid fa-heart "></i></span>
                    <span class="cart cart-count" pid="${id}"><i class="fa-solid fa-cart-shopping "></i></span>
                </div>
            </div>`
        i++
    }
}


var items=document.querySelectorAll(".item")
items.forEach((item,i)=>{
    item.querySelector(".img img").src=products[i].images[0]
    console.log(products[i].id );
    item.querySelector("a").href=`details.html?id=${products[i].id}`
    item.querySelector(".text h3").textContent=products[i].title
    item.querySelector(".text span").textContent=products[i].price + '$'
    item.querySelector(".heart").setAttribute('pid',products[i].id)
    item.querySelector(".cart").setAttribute('pid',products[i].id)
    console.log(item.querySelector(".heart"));
})
        
        
var cards=document.querySelectorAll('.products .card')
var c=cards[0].cloneNode(true)
p.appendChild(c)
c=cards[1].cloneNode(true)
p.appendChild(c)
 c=cards[2].cloneNode(true)
p.appendChild(c)

var x=1
setInterval(()=>{
    // console.log('scr' + window.innerWidth);
    if (x>=11) {
          p.style.transition='none'
        p.style.transform=`translateX(0%)`
        
        x=1
    }
    else{
        p.style.transition='transform 1s'
        if (window.innerWidth>991) {
             p.style.transform=`translateX(${-(98/3 + 1) * x}%)`
        }
        else{
             p.style.transform=`translateX(${-101 * x}%)`
        }
       
        x++
       
    }
},2000)

editeHeartCart()

