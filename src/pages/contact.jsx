 
import React from 'react'
import { Link } from "gatsby"

const Contact = () => {
    const text = 'loren loren'
    
    return(
        <>
            <nav>
            <Link to ="/about" activeStyle={{ color: "red" }}>About</Link>
            <Link to ="/contact" activeStyle={{ color: "red" }} >Contact</Link>
            </nav>
            <h1>Contact</h1>
            <h2>{text}</h2>
            <p>
                Follow me on <a href="https://twitter.com/wwwbrunagon" target="_blank">Twitter</a>
            </p>
        </>
    )
}

export default Contact