 
import React from 'react'
import Menu from '../components/Menu'
import Layout from '../components/Layout'
import CardV2 from '../components/CardV2'


const About = () => {
    const text = 'loren loren'
    return(
        <Layout>
            <Menu />
            <h1>About</h1>
            <h2>{text}</h2>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <CardV2
                        titleCard="Lorem Ipsum"
                        textCard ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        colorButton ="primary"                        
                        />                        
                    </div>
                    <div className="col-3">
                        <CardV2
                        titleCard="Lorem Ipsum"
                        textCard ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        colorButton ="primary"                        
                        />                        
                    </div>
                    <div className="col-3">
                        <CardV2
                        titleCard="Lorem Ipsum"
                        textCard ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        colorButton ="primary"                        
                        />                        
                    </div>
                    <div className="col-3">
                        <CardV2
                        titleCard="Lorem Ipsum"
                        textCard ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        colorButton ="primary"                        
                        />  
                    </div>
                    <div className="col-3">
                        <CardV2
                        titleCard="Lorem Ipsum"
                        textCard ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        colorButton ="warning"                        
                        />  
                    </div>
                    <div className="col-3">
                        <CardV2
                        titleCard="Lorem Ipsum"
                        textCard ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        colorButton ="danger"                        
                        />  
                    </div>
                </div>
                
                
            </div>
        </Layout>
    )
}

export default About