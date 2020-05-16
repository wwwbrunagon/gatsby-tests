 
import React from 'react'
import { Link } from "gatsby"


const About = () => {
    const text = 'loren loren'
    return(
        <>
            <nav>
                <Link to ="/about" activeStyle={{ color: "red" }}>About</Link>
                <Link to ="/contact" activeStyle={{ color: "red" }}>Contact</Link>
            </nav>
            <h1>About</h1>
            <h2>{text}</h2>
        </>
    )
}

export default About