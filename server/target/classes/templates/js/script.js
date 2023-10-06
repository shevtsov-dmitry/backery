let burgersOrder = document.querySelector('.order-block')
let sixBurgers = burgersOrder.lastElementChild.children

for (const e of sixBurgers) {
    e.style.zIndex = 0;
    console.log(e.children[0].children[2])
    // ------------
    let button = e.children[0].children[2]
    button.addEventListener('mouseenter',()=>{
        button.style.backgroundColor = 'white';
        button.style.color = '#292929'
        button.addEventListener('mouseleave',()=>{
            button.style.backgroundColor = '#292929';
            button.style.color = 'white'
        })
    })
    // ------------
    e.addEventListener('mouseenter',()=>{
        e.style.zIndex = 1
        e.children[1].style.transform = 'scale(1.03)'
        e.children[1].style.filter = 'contrast(1.5)'
        e.children[0].style.opacity = '1'

        // ------------

        e.addEventListener('mouseleave',()=>{
            e.children[1].style.transform = 'scale(1)'
            setTimeout(()=>{
            e.style.zIndex = 0
            }, 300)
            e.children[1].style.filter = 'contrast(1)'
            e.children[0].style.opacity = '0'
        })
    })
}
 
