addNav('contact')
addFoot()


var heartsLocal=JSON.parse(localStorage.getItem('hearts')) || []
var cartsLocal=JSON.parse(localStorage.getItem('carts')) || []

editeHeartCart()
// let heartCount=document.querySelector('.heart-count')
// let cartCount=document.querySelector('.cart-count')




// heartCount.textContent=heartsLocal.length
// cartCount.textContent=cartsLocal.length

let form = document.querySelector("form");



form.addEventListener("submit", function(e) {
  e.preventDefault(); 

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let msg = document.getElementById("message").value;

  let contact={
    'name':name,
    'email':email,
    'phone':phone,
    'msg':msg,
  }
  if (form.checkValidity()) {
    let msgs=JSON.parse(localStorage.getItem('contact')) || []
    msgs.push(contact)
    localStorage.setItem("contact",JSON.stringify(msgs))
    let home=document.querySelector("[href='index.html']")
    home.click()
  }
  console.log(contact);
  
});