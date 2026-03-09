addNav('cart')
addFoot()

var products=JSON.parse(localStorage.getItem('products')) || []
// var cartsLocal=JSON.parse(localStorage.getItem('carts')) || []
// var heartsLocal=JSON.parse(localStorage.getItem('hearts')) || []

let heartCount=document.querySelector('.heart-count')
let cartCount=document.querySelector('.cart-count')


heartCount.textContent=heartsLocal.length
cartCount.textContent=cartsLocal.length

var carts=[]

products.forEach(p => {
    if (cartsLocal.includes(`${p.id}`)) {
        carts.push(p)
    }
    
});

console.log(carts);

let payable=0
let shipping=10
let cart=document.querySelector('.cart')
carts.forEach(p => {

    payable +=p.price
    // let cart=document.querySelector('.cart')
    
    cart.innerHTML +=` 
    <div class="item" id="p${p.id}">
        <div class="img">
            <a href="details.html?id=${p.id}">
                <img src="${p.images[0]}">
            </a>
        </div>
        <div class="title">${p.title}</div>
        <div class="price">${p.price}$</div>
        <div class="qountity">
            <span class="minus" pid="${p.id}">
                <i class="fa-solid fa-minus"></i>
            </span>
            <span class="count" id="count${p.id}">1</span>
            <span class="plus" pid="${p.id}">
                <i class="fa-solid fa-plus"></i>
            </span>
        </div>
            <div>
                <span class="total" id="total${p.id}">${p.price}</span>
                <span>$</span>
            </div>
            <div class="del" pid="${p.id}">
                <div>Delete</div>
            </div>
    </div>`

    });

    let pay=document.querySelector(`.cont .pay`)
    let ship=document.querySelector(`.cont .ship`)
    let orderTotal=document.querySelector(`.cont .order-total`)

    pay.textContent=payable + '$'
    ship.textContent=shipping + '$'
    orderTotal.textContent=payable + shipping + '$'


    let pluses=document.querySelectorAll('.plus')
    let minuses=document.querySelectorAll('.minus')

    pluses.forEach((p)=>{
        p.addEventListener('click',()=>{
            let id=p.getAttribute('pid')
            let count=document.querySelector(`#p${id} .count`)
            console.log(count.innerText);
            count.textContent= 1 + +count.innerText
            
            let total=document.querySelector(`#p${id} .total`)
            let price=document.querySelector(`#p${id} .price`)

            total.textContent=parseInt(price.innerText) * +count.innerText

            pay.textContent=parseInt(pay.innerText) + parseInt(price.innerText) + '$'
            orderTotal.textContent=parseInt(pay.innerText) + shipping + '$'

        })
    })
    minuses.forEach((m)=>{
        m.addEventListener('click',()=>{
            let id=m.getAttribute('pid')
            let count=document.querySelector(`#p${id} .count`)
            if (+count.innerText >1) {
                // console.log(count.innerText);
                count.textContent= count.innerText - 1
                let total=document.querySelector(`#p${id} .total`)
                let price=document.querySelector(`#p${id} .price`)

                total.textContent=parseInt(price.innerText) * +count.innerText
    
                pay.textContent=parseInt(pay.innerText) - parseInt(price.innerText) + '$'
                orderTotal.textContent=parseInt(pay.innerText) + shipping + '$'
            }          
        })
    })

    let dels=document.querySelectorAll('.del')

    dels.forEach((d)=>{
        d.addEventListener('click',()=>{
            const id = d.getAttribute('pid')
            let div=document.getElementById(`p${id}`)
            console.log(`p${id}`);
            let total=document.querySelector(`#p${id} .total`)

            pay.textContent=parseInt(pay.innerText) - parseInt(total.innerText) + '$'
            orderTotal.textContent=parseInt(pay.innerText) + shipping + '$'
            div.remove()
            
            cartsLocal.splice(cartsLocal.indexOf(id),1)
            cartCount.textContent=cartsLocal.length
            localStorage.setItem("carts",JSON.stringify(cartsLocal))

        })
    })


    
    function checkout(mode){
        let back=document.querySelector('.back')
        let con=document.querySelector('.confirm')
        back.style.display=mode
        con.style.display=mode
    }

  

//    function checkoutConf(){
    var form = document.getElementById('paymentForm')
    
    form.addEventListener('submit', function (event) {
        event.preventDefault()
        event.stopPropagation() 
        // console.log(form);
    if (form.checkValidity()) {
        // console.log(form);
        if (user) {
            let name=document.getElementById('userName').value
            let num=document.getElementById('cardNumber').value
            let date=document.getElementById('expiryDate').value
            let cvv=document.getElementById('cvv').value
            let card=document.getElementById('visaSelect').value
            let pOrders=[]
            cartsLocal.forEach((c)=>{
                let count=document.getElementById(`count${c}`).textContent
                let total=document.getElementById(`total${c}`).textContent
                let p={
                    productId:c,
                    count:count,
                    total:total,
                }
                pOrders.push(p)
            })
            let order={
                info:{
                    userName:name,
                    cardNumber:num,
                    expiryDate:date,
                    cvv:cvv,
                    visaSelect:card
                },
                products:{
                    ...pOrders
                }
            }
            user.orders.push(order)
            user.carts=[]
            cartCount.textContent=0

            let users=JSON.parse(localStorage.getItem('users'))
            console.log(users);
            users=users.map((u)=>u.id==user.id?user:u)
            console.log(users);
            
            localStorage.setItem('users',JSON.stringify(users))  
        
        }
        
        pay.textContent=0 + '$'
        orderTotal.textContent= shipping + '$'
        addAlert('Order Done ✅')
        checkout('none')
        let cart=document.querySelector('.cart')
        cart.innerHTML=`
            <div class="d-none d-md-grid">
                <div></div>
                <div class="t">Title</div>
                <div>Price</div>
                <div>Qountity</div>
                <div>Total</div>
            </div>`
        
        
    }
    form.classList.add('was-validated')

})

//    })}


//       (function () {
 
//   var form = document.getElementById('paymentForm')

//   form.addEventListener('submit', function (event) {
   
//     if (!form.checkValidity()) {
//       event.preventDefault()
//       event.stopPropagation() 
//     }
//     form.classList.add('was-validated')
//   }, false)

// })()