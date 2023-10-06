import {useState} from 'react'
import './App.css'
import PreviewGreetingPage from "./components/previewGreetingPage/PreviewGreetingPage.jsx";
import EverythingYouLike from "./components/everythingYouLike/EverythingYouLike.jsx";
import OurProud from "./components/ourProud/OurProud.jsx";


function App() {

    return (
        <>
            <main className={"wrapper"}>
                <PreviewGreetingPage></PreviewGreetingPage>
                <EverythingYouLike></EverythingYouLike>
                <OurProud></OurProud>
            </main>
        </>
    )
}

export default App
