// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styles from "../CSS-MODULES/howItWorks.module.css"
import CardDesktop from "./cardDesktop"

export default () => 
<div>
    <div className={styles.containerGrid}>
        <div className={styles.firstSection}>
            <CardDesktop/>
        </div>
        <div className={styles.secondSection}>
            <div className={styles.imageWrapper}>
                <img src="https://assets.website-files.com/5ccc8aa73871f9d0b1c81c04/5d81401d08863e1d917f691c_how%20it%20works-min.jpg" alt="tings"/>           
            </div>
        
        </div>
        <div className={styles.thirdSection}>
            <h3 className={styles.h3heading}> Don't settle for shirts no one will wear. </h3>
            <p>Too often, amazing brands trust t-shirt printers with their designs, only to be let down by the end product.
                <br></br>
                <br></br>

            Super Soft Screenprinting's curated library of shirts, unique print options, and simple order process make it easier than ever to order shirts you'll love and wear proudly.
            </p>

            <div className={styles.smallImage}>

                <img src="https://assets.website-files.com/5ccc8aa73871f9d0b1c81c04/5d81401cd081e3b7f70c5dc7_work%20with%20real%20thread-min.jpg" alt="ok"/>
            </div>
        </div>
    </div>  
    <div className={styles.promobuttonWrapper}>
        <button className={styles.promobutton}> See How We Do It!</button>
    </div>
</div>