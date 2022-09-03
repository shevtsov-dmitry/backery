let burgersOrder = document.querySelector('.order-block')

let sixBurgers = burgersOrder.lastElementChild.children

for (const e of sixBurgers) {
    e.addEventListener('mouseenter',()=>{
        e.style.transform = 'scale(1.05)'
        e.style.zIndex = 0;
        e.addEventListener('mouseleave',()=>{
            e.style.transform = 'scale(1)'
            setTimeout(
                e.style.zIndex = 1 , 200
                
            )
            
        })
    })
}
