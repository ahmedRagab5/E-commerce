addNav('search')
addFoot()
editeHeartCart()

var products=JSON.parse(localStorage.getItem('products')) || []
var heartsLocal=JSON.parse(localStorage.getItem('hearts')) || []
var cartsLocal=JSON.parse(localStorage.getItem('carts')) || []
var heartCount =document.querySelector('span.heart-count')
var cartCount =document.querySelector('span.cart-count')

    // heartCount.textContent=heartsLocal.length
    // cartCount.textContent=cartsLocal.length
var hearts
var carts
var results=[]




function change(e){
    results=[]
    products.forEach(p => {
        if (p.title.includes(e.target.value) && e.target.value!='') {
            results.push(p)            
        }
    });
    search()
    console.log(results);
    
}


function search(){

    let res2=document.getElementById('results')
    res2.remove()
    
    let res=document.createElement('div')
    res.id='results'
    let search=document.querySelector('.search')
    search.appendChild(res)
    results.forEach(p => {

    addCard(p,'results')
});




}





