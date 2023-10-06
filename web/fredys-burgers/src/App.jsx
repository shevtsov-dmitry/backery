import {useState} from 'react'
import './App.css'
import PreviewGreetingPage from "./components/previewGreetingPage/PreviewGreetingPage.jsx";

function App() {

    return (
        <>
            <main className={"wrapper"}>
                <PreviewGreetingPage></PreviewGreetingPage>
            </main>
        </>
    )
}

export default App
