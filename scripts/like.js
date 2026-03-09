
addNav('like')
addFoot()

var products=JSON.parse(localStorage.getItem('products')) || []
// var heartsLocal=JSON.parse(localStorage.getItem('hearts')) || []
// var cartsLocal=JSON.parse(localStorage.getItem('carts')) || []

let heartCount=document.querySelector('.heart-count')
let cartCount=document.querySelector('.cart-count')


var results=[]
// console.log(heartsLocal);

getResultes(heartsLocal)

function getResultes(local){
    results=[]
    products.forEach(p => {
    // console.log(`${p.id}`);
    
    if (local.includes(`${p.id}`)) {
        results.push(p)
    }
    });
    addCards(results)
    
    
}



function addCards(items){

  items.forEach(p => {
  
    addCard(p,'likes')

    let heart=document.querySelector(`.heart[pid='${p.id}']`)
    heart.style.display='none'

    let card=document.getElementById(p.id)
    card.innerHTML +=`
      <div class="delete" pid="${p.id}">
        <i class="fa-solid fa-x"></i>
      </div>`  
  });
    
}


  let deletes=document.querySelectorAll('.delete')
  console.log(deletes);
  
  deletes.forEach((d)=>{
    d.addEventListener('click',()=>{
      
        
        let id =d.getAttribute('pid')
        console.log(id);
        
        heartsLocal.splice(heartsLocal.indexOf(id),1)  
        console.log(heartsLocal);
        
        heartCount.textContent=heartsLocal.length
        deleteP(id)
        localStorage.setItem('hearts',JSON.stringify(heartsLocal))
    })
  })

  function deleteP(id){
    let d=document.getElementById(id)
    d.remove()
  }

  editeHeartCart()



