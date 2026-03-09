addNav('shop')
addFoot()

var products=JSON.parse(localStorage.getItem('products'))
var search=''
var cat=[]
var heartsLocal=JSON.parse(localStorage.getItem('hearts')) || []
var cartsLocal=JSON.parse(localStorage.getItem('carts')) || []




  addCards(products)

  editeHeartCart()

let filter=document.getElementsByClassName('filter')[0]
  cat.forEach((c)=>{
   let option=document.createElement('div')
   option.textContent=c
   option.setAttribute('category',c)
   filter.appendChild(option)
  })



 function addCards(items){
   items.forEach(p => {
      // console.log(p + ' ' + p.category.name);
   if (!cat.includes(p.category.name) &&p.category.name!=='string'&&p.category.name!=='strinhdg') {
      
      cat.push(p.category.name)
   }
   
   addCard(p,"products")
});
  }

let btns=document.querySelectorAll('.filter div')
let actives=[]
btns.forEach((btn)=>{
   btn.addEventListener('click',()=>{
      
      let atb=btn.getAttribute('category')
      if (actives.includes(atb)) {
         actives.splice(actives.indexOf(atb),1)
         btn.className=''  
      }
      else{
         btn.className="active"
         actives.push(atb)        
      }
      console.log(actives);
      let products=document.querySelectorAll('.card')
      products.forEach((p)=>{
            if ((actives.includes(p.getAttribute('category'))) || actives.length==0) {
               p.style.display='flex'
            }
            else{
               p.style.display='none'
            }
         })
      
   })
})




