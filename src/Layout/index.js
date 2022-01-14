import React, { useState } from "react"
import Header from "./header"
import Footer from "./footer"


const Layout = ({ children }) => {

    const [darktheme, setdarkTheme] = useState("")

    const toggleTheme = () => {
        if (darktheme == "") {
            setdarkTheme("dark-theme")
        }
        else {
            setdarkTheme("")
        }
    }
    return (
        <div className={darktheme}>
            <Header toggleThemeMode={toggleTheme} darktheme={darktheme} />
            <>
                {children}
            </>
            <Footer />
        </div>
    )
}

export default Layout