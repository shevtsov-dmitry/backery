import {useState} from 'react'
import './App.css'
import PreviewGreetingPage from "./components/previewGreetingPage/PreviewGreetingPage.jsx";
import EverythingYouLike from "./components/everythingYouLike/EverythingYouLike.jsx";

function App() {

    return (
        <>
            <main className={"wrapper"}>
                <PreviewGreetingPage></PreviewGreetingPage>
                <EverythingYouLike></EverythingYouLike>
            </main>
        </>
    )
}

export default App
