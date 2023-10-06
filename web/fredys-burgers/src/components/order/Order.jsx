function Order(){
    // let burgersOrder = document.querySelector('.order-block')
    // let sixBurgers = burgersOrder.lastElementChild.children
    //
    // for (const e of sixBurgers) {
    //     e.style.zIndex = 0;
    //     console.log(e.children[0].children[2])
    //     // ------------
    //     let button = e.children[0].children[2]
    //     button.addEventListener('mouseenter',()=>{
    //         button.style.backgroundColor = 'white';
    //         button.style.color = '#292929'
    //         button.addEventListener('mouseleave',()=>{
    //             button.style.backgroundColor = '#292929';
    //             button.style.color = 'white'
    //         })
    //     })
    //     // ------------
    //     e.addEventListener('mouseenter',()=>{
    //         e.style.zIndex = 1
    //         e.children[1].style.transform = 'scale(1.03)'
    //         e.children[1].style.filter = 'contrast(1.5)'
    //         e.children[0].style.opacity = '1'
    //
    //         // ------------
    //
    //         e.addEventListener('mouseleave',()=>{
    //             e.children[1].style.transform = 'scale(1)'
    //             setTimeout(()=>{
    //                 e.style.zIndex = 0
    //             }, 300)
    //             e.children[1].style.filter = 'contrast(1)'
    //             e.children[0].style.opacity = '0'
    //         })
    //     })
    // }
    const burgers = []

    burgers.push({
        name: "Shooter",
        ingredients: [
            "fidju fish",
            "colosal suffle alacoto",
            "waley faick",
            "keegen efadis",
            "kiligang reece",
            "potato",
            "cabbagge"
        ],
        price: "19,99$",
        imageUrl: "../../../imgs/burger-up-left.png",
    })

    burgers.push({
        name: "Accomplishers",
        ingredients: [
            "potato",
            "cabbagge",
            "fidju fish",
            "colosal suffle",
            "waley faick",
            "keegen efadis",
            "kiligan greece"
        ],
        price: "21,99$",
        imageUrl: "../../../imgs/burger-up-mid.png",
    })

    burgers.push({
        name: "Belong",
        ingredients: [
            "fidju fish",
            "colosal suffle",
            "waley faick",
            "keegen efadis"
        ],
        price: "19,99$",
        imageUrl: "../../../imgs/burger-up-right.png",
    })

    burgers.push({
        name: "Whole Time",
        ingredients: [
            "potato",
            "cabbagge",
            "waley faick",
            "keegen efadis",
            "kiligan greece"
        ],
        price: "34.99$",
        imageUrl: "../../../imgs/burger-bot-left.png",
    })

    burgers.push({
        name: "Ketchuppy floring",
        ingredients: [
            "potato",
            "cabbagge",
            "fidju fish",
            "colosal suffle",
            "waley faick"
        ],
        price: "34.99$",
        imageUrl: "../../../imgs/burger-bot-mid.png",
    })

    burgers.push({
        name: "Loffye's",
        ingredients: [
            "potato",
            "cabbagge",
            "fidju fish",
            "colosal suffle",
            "waley faick",
            "keegen efadis",
            "kiligan greece"
        ],
        price: "29,99$",
        imageUrl: "../../../imgs/burger-bot-right.png",
    })

    return(
        <>
            <div className="order-block">
                <h2>Order</h2>
                <ul>
                    <li></li>
                </ul>
            </div>
        </>
    )

}

export default Order