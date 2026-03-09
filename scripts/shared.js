
// var heartsLocal=JSON.parse(localStorage.getItem('hearts')) || []
// var cartsLocal=JSON.parse(localStorage.getItem('carts')) || []


//  let user=localStorage.getItem('user') || {}



function editeHeartCart(){

   if (user) {
      heartsLocal=user.hearts
      cartsLocal=user.carts
      console.log(user);  
   }
    
    var hearts=document.querySelectorAll('.heart')
    var carts=document.querySelectorAll('.cart')
    var heartCount =document.querySelector('span.heart-count')
    var cartCount =document.querySelector('span.cart-count')
    heartCount.textContent=heartsLocal.length
    cartCount.textContent=cartsLocal.length

    function saveLocal(local,arr ,localName){

       arr.forEach((h)=>{
            if (local.includes(h.getAttribute('pid'))) {
                h.classList.add('active')
            }
          h.addEventListener('click',()=>{
             if (local.includes(h.getAttribute('pid')) && localName=='hearts') {
                local.splice(local.indexOf(h.getAttribute('pid')),1)

                h.classList.remove('active')
             }
             else if(!(local.includes(h.getAttribute('pid')))){
                local.push(h.getAttribute('pid'))
                h.classList.add('active')
             }
             heartCount.textContent=heartsLocal.length
             cartCount.textContent=cartsLocal.length

             if (user) {
              
               user.hearts=heartsLocal
               user.carts=cartsLocal
               let users=JSON.parse(localStorage.getItem('users'))
               users=users.map((u)=>u.id==user.id?user:u)
               console.log('user');
               console.log(user);
               console.log(users);
               
               localStorage.setItem('users',JSON.stringify(users))  
             }
             else{
               localStorage.setItem(localName,JSON.stringify(local))              
             }
          })
       })
    }

    saveLocal(heartsLocal,hearts,"hearts")
    saveLocal(cartsLocal,carts,"carts")


}

 function addCard(p,idName){

   if (p.images.length>0) {
      

    let products=document.getElementById(idName)
     
    products.innerHTML +=`<div  id=${p.id} class="card" category="${p.category.name}">
         <div class="img">
            <a href="details.html?id=${p.id}">
               <img src="${p.images[0]}">
            </a>
         </div>
         <h4 class="title">${p.title}</h4>
         <div class="bottom">
            <span class="price">${p.price}$</span>
            <div class="icons">
               <span class="heart" pid="${p.id}"> 
                  <i class="fa-solid fa-heart heart"></i>
               </span>
               <span class="cart" pid="${p.id}">
                  <i class="fa-solid fa-cart-shopping cart"></i>
               </span>
            </div>
         </div>
      </div>`
   }

  }



function addAlert(msg){

   if (msg.length>0) {
      let body = document.querySelector('body')
      body.innerHTML +=`
            <div class="alert">
               <div class="msg">${msg}</div>
            </div>`

      setTimeout(()=>{
         let alert=document.querySelector('.alert')
         alert.remove()
      },2000)
   }
}


