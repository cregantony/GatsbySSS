// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styles from "../CSS-MODULES/newsletter.module.css"

export default () => 
<div className={styles.newsletterContainer}>
    <div className={styles.newsletterWrapper}>
        <h4 className={styles.newsletterTitle}>
            Subscribe for t-shirt enlightenment
        </h4>
        <p className={styles.newsletterContent}>
            Sign up for new product releases, free design resources, and a chance to win <strong>36 free custom printed shirts.</strong>
        </p>
        <input className={styles.newsletterInput} placeholder={`Your email address`}>      
        </input>
    </div>
</div>