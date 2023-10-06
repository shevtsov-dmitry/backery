function Order(){
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


    return(
        <>
            <div className="order-block">
                <h2>Order</h2>
                <ul>
                    <li>
                        <div className="burg-buy">
                            <h3>Shooter</h3>
                            <article>
                                <ul>
                                    <li>fidju fish</li>
                                    <li>colosal suffle alacoto</li>
                                    <li>waley faick</li>
                                    <li>keegen efadis</li>
                                    <li>kiligan greece</li>
                                    <li>potato</li>
                                    <li>cabbagge</li>
                                </ul>
                            </article>
                            <button>19,99$</button>
                        </div>
                        <img src="../../../public/imgs/burger-up-left.png" alt=""></img>
                    </li>
                    <li>
                        <div className="burg-buy">
                            <h3>Accomplishers</h3>
                            <article>
                                <ul>
                                    <li>potato</li>
                                    <li>cabbagge</li>
                                    <li>fidju fish</li>
                                    <li>colosal suffle</li>
                                    <li>waley faick</li>
                                    <li>keegen efadis</li>
                                    <li>kiligan greece</li>
                                </ul>
                            </article>
                            <button>21,99$</button>
                        </div>
                        <img src="../../../public/imgs/burger-up-mid.png" alt=""></img>
                    </li>
                    <li>
                        <div className="burg-buy">
                            <h3>Belong</h3>
                            <article>
                                <ul>
                                    <li>fidju fish</li>
                                    <li>colosal suffle</li>
                                    <li>waley faick</li>
                                    <li>keegen efadis</li>
                                </ul>
                            </article>
                            <button>19,99$</button>
                        </div>
                        <img src="../../../public/imgs/burger-up-right.png" alt=""></img>
                    </li>
                    <li>
                        <div className="burg-buy">
                            <h3>Whole Time</h3>
                            <article>
                                <ul>
                                    <li>potato</li>
                                    <li>cabbagge</li>
                                    <li>waley faick</li>
                                    <li>keegen efadis</li>
                                    <li>kiligan greece</li>
                                </ul>
                            </article>
                            <button>34.99$</button>
                        </div>
                        <img src="../../../public/imgs/burger-bot-left.png" alt=""></img>
                    </li>
                    <li>
                        <div className="burg-buy">
                            <h3>Ketchupy floring</h3>
                            <article>
                                <ul>
                                    <li>potato</li>
                                    <li>cabbagge</li>
                                    <li>fidju fish</li>
                                    <li>colosal suffle</li>
                                    <li>waley faick</li>
                                </ul>
                            </article>
                            <button>39,99$</button>
                        </div>
                        <img src="../../../public/imgs/burger-bot-mid.png" alt=""></img>
                    </li>
                    <li>
                        <div className="burg-buy">
                            <h3>Loffye's</h3>
                            <article>
                                <ul>
                                    <li>potato</li>
                                    <li>cabbagge</li>
                                    <li>fidju fish</li>
                                    <li>colosal suffle</li>
                                    <li>waley faick</li>
                                    <li>keegen efadis</li>
                                    <li>kiligan greece</li>
                                </ul>
                            </article>
                            <button>29,99$</button>
                        </div>
                        <img src="../../../public/imgs/burger-bot-right.png" alt=""></img>
                    </li>
                </ul>
            </div>
        </>
    )

}

export default Order