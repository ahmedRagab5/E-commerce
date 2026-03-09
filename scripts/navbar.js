var heartsLocal=JSON.parse(localStorage.getItem('hearts')) || []
var cartsLocal=JSON.parse(localStorage.getItem('carts')) || []
// addDiv()

let userId=localStorage.getItem('userId')
let users=JSON.parse(localStorage.getItem('users')) || []
let user=users.find(u =>`"${u.id}"`==userId);

   if (user) {
      heartsLocal=user.hearts
      cartsLocal=user.carts
   }

function addNav(active){
    let nav =document.getElementById("header")
    nav.innerHTML=` <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="index.html"><img src="images/logo.png" alt=""></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa-solid fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link  ${active=="home"?"active":""}" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link  ${active=="shop"?"active":""}" href="shop.html">Shop</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link  ${active=="contact"?"active":""}" href="contact.html" >Contact Us</a>
            </li>
          </ul>
        </div>
        <div class="icons">
            <div>
                <span class="  ${active=='search'?'active':''}"><a href="search.html"><i class="fa-solid fa-magnifying-glass"></i></a></span>
            </div>
            <div>
                <span class="count heart-count">0</span>
                <span  class=" ${active=='like'?'active':''}"><a href="like.html"><i class="fa-solid fa-heart"></i></a></span>
            </div>
            <div>
                <span class="count cart-count">0</span>
                <span  class="  ${active=='cart'?'active':''}"><a href="cart.html"><i class="fa-solid fa-cart-shopping"></i></a></span>
            </div>
            <div>
                <span  class="  ${active=='auth'?'active':''}"><a href="${user?'profile.html':'auth.html'}"><i class="fa-solid fa-user${user?'':'-plus'}"></i></a></span>
            </div>
            
        </div>
      </div>
    </nav>`
    // console.log("div.innerHTML");
    
}