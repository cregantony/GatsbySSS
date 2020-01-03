// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import Styles from "../CSS-MODULES/quickFacts.module.css"

export default () => (
<div className={Styles.quickFacts}>
     {/* Quick Facts Item One */}
    <div className={Styles.quickFactsItem}>
        <div className={Styles.iconWrapper}>
            <img src="https://assets.website-files.com/5ccc8aa73871f9d0b1c81c04/5ccc8aa73871f94597c81c42_icon-low-minimums.svg" alt="" className="featured-icon"/>
        </div>
        <div className={Styles.quickFactsContent}>
            <h6> Low minimums </h6>
            <p> Order as few as 20 shirts to get your project started. </p>
        </div>
    </div>
    {/* Quick Facts Item Two */}
    <div className={Styles.quickFactsItem}>
        <div className={Styles.iconWrapper}>
            <img src="https://assets.website-files.com/5ccc8aa73871f9d0b1c81c04/5ccc8aa73871f9af8cc81c44_icon-lightning.svg" alt="" className="featured-icon"/>
        </div>
        <div className={Styles.quickFactsContent}>
            <h6> Lightning fast delivery </h6>
            <p> Try our 2-day service and get your shirts by December 17 </p>
        </div>
    </div>
    {/* Quick Facts Item Three */}
    <div className={Styles.quickFactsItem}>
        <div className={Styles.iconWrapper}>
            <img src="https://assets.website-files.com/5ccc8aa73871f9d0b1c81c04/5ccc8aa73871f95561c81c43_icon-money-back.svg" alt="" className="featured-icon"/>
        </div>
        <div className={Styles.quickFactsContent}>
            <h6> Money back guarantee </h6>
            <p>Count on us being on time with each and every order. </p>
        </div>
    </div>
</div>
)