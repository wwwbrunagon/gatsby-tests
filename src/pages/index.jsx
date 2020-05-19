import React from "react"
import Menu from '../components/Menu'
import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = () => (
  
  <Layout>
    <Menu />
    <SEO title="Home" />
    <h1>Home</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>    
  </Layout>
)

export default IndexPage
