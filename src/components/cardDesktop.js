// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import Homestyles from "../CSS-MODULES/cardDesktop.module.css"

export default () =>
<div className={Homestyles.module}>
  <div className={Homestyles.imageWrapper}>
    <div className={Homestyles.cardImage}><img src="https://assets.website-files.com/5ccc8aa73871f9d12dc81c1b/5cf19c0ffeecff536f839acd_pop%20parlour%20feature.jpg" alt="brooklyn brewery"/></div>
  </div>
  <div className={Homestyles.imageCaption}>
    <h6>Success Stories</h6>
    <h5>Pop Parlour's Shirts are Cool as Ice (Pops)</h5>
    <p>See how they make shirts like their popsicles: simple, fresh, and beautiful.</p>
  </div>
</div>
