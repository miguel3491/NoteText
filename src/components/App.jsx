import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Notes from "./Notes"
import "../styles.css"

function App(){
    return(
        <div>
            <header>
            <Header></Header>
            </header>

            <body>
            <Notes></Notes>
            </body>

            <footer>
            <Footer></Footer> 
            </footer>
        </div>
         
    )
}

export default App;