import {useState} from 'react'
import './App.css'
import PreviewGreetingPage from "./components/previewGreetingPage/PreviewGreetingPage.jsx";
import EverythingYouLike from "./components/everythingYouLike/EverythingYouLike.jsx";
import OurProud from "./components/ourProud/OurProud.jsx";
import Order from "./components/order/Order.jsx";
import Footer from "./components/footer/Footer.jsx";


function App() {

    return (
        <>
            <main className={"wrapper"}>
                <PreviewGreetingPage></PreviewGreetingPage>
                <EverythingYouLike></EverythingYouLike>
                <OurProud></OurProud>
                <Order></Order>
                <Footer></Footer>
            </main>
        </>
    )
}

export default App
