// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import Homestyles from "../CSS-MODULES/mainLanding.module.css"
import CardDesktop from "./cardDesktop"

export default () => (
<div className={Homestyles.masthead}>
<div className={Homestyles.leftSection}>
  <div className={Homestyles.textSection}>
  <h1>Soft Custom Shirts</h1>
  <p>Your brand is too valuable to print on scratchy, ill-fitting shirts that no one will wear. Real Thread makes it easy to order super soft, stylish custom printed t-shirts that get your message into the world.</p>
  </div>
</div>
<div className={Homestyles.rightSection}>
 <CardDesktop/>
</div>
{/* <div className={Homestyles.mastheadImgWrapper}> */}
<img className={Homestyles.mastheadImg} src="https://assets.website-files.com/5ccc8aa73871f9d12dc81c1b/5cdaba596d9f35a12997b809_masthead-pop-parlour-compressor.jpg" alt="hero"/> 
{/* </div> */}
</div>
)