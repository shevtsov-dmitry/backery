let burgersOrder = document.querySelector('.order-block')

let sixBurgers = burgersOrder.lastElementChild.children

for (const e of sixBurgers) {
    e.style.zIndex = 0;
    e.addEventListener('mouseenter',()=>{
        e.style.zIndex = 1
        e.style.transform = 'scale(1.03)'
        e.addEventListener('mouseleave',()=>{
            e.style.transform = 'scale(1)'
            setTimeout(()=>{
            e.style.zIndex = 0
            }, 200)
        })
    })
}
