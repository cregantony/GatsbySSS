import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MainLanding from "../components/mainLanding"
import QuickFacts from "../components/quickFacts"
import HowItWorks from "../components/howItWorks"
import OurProducts from "../components/ourProducts"
import HeroBanner from "../components/heroBanner"
import Testimonials from "../components/testimonials"
import FooterPromo from "../components/footerPromo"
import Footer from "../components/footer"
import Newsletter from "../components/newsletter"


const IndexPage = () => (
  <Layout>

    <SEO title="Home" />
    {/* Main Landing Page Component. */}
    testing2
    <MainLanding/>
    {/* Quick Facts Component */}
    <QuickFacts/>
     {/* How It Works Component */}
     <HowItWorks/>
     {/* Our Products Component */}
     <OurProducts/>
     {/* Hero Banner Component */}
     <HeroBanner/>
     {/* Testimonials Component */}
     <Testimonials/>
     {/* Footer Promo Component */}
     <FooterPromo/>
    {/* Newsletter Component */}
     <Newsletter/> 
     {/* Footer Component */}
     <Footer/>  
  
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
