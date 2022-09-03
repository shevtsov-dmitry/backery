let burgersOrder = document.querySelector('.order-block')

let sixBurgers = burgersOrder.lastElementChild.children

for (const e of sixBurgers) {
    e.addEventListener('mouseenter',()=>{
        e.style.opacity = 0.5
        e.style.transform = 'scale(1.1)'
        e.style.transition = 'transform 0.5 linear'
        e.addEventListener('mouseleave',()=>{
            e.style.transform = 'scale(1)'
        })
    })
}
