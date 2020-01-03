// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styles from "../CSS-MODULES/ourProducts.module.css"

export default () => (
<div>

    <div className={styles.productWrap}>
    <h1 className={styles.productTitle}> Our Products </h1>
        <div className={styles.contentWrap}>
            <div className={styles.firstImage}>
                <img src="https://assets.website-files.com/5ccc8aa73871f9d0b1c81c04/5cfea3d1d35b153cf8fd5079_v-neck.jpg" alt=""/>
            </div>
            <div className={styles.firstList}>
                <h5 className={styles.listTitle}>Styles</h5>
                <div className={styles.listItem}>Crew Necks</div>
                <div className={styles.listItem}>V Necks</div>
                <div className={styles.listItem}>Tank Tops</div>
                <div className={styles.listItem}>Long Sleeves</div>
                <div className={styles.listItem}>Hoodies</div>    
            </div>
            <div className={styles.secondList}>
                <h5 className={styles.listTitle}>Add-On Services</h5>
                <div className={styles.listItem}>Tag Printing</div>
                <div className={styles.listItem}>Hem Tags</div>
                <div className={styles.listItem}>Folding {'&'} Polybagging</div>
                <div className={styles.listItem}>Foil Printing</div>
                <div className={styles.listItem}>Hang Tags</div>   
            </div>
            <div className={styles.secondImageColumn}>
                <img src="https://assets.website-files.com/5ccc8aa73871f9d0b1c81c04/5d278425903a5a59dbea3044_products-tag-printing.jpg" alt=""/>
                <div className={styles.sampleWrapper} >
                    <div className={styles.sampleContentWrapper} >
                        <img src="https://assets.website-files.com/5ccc8aa73871f9d0b1c81c04/5ccc8aa73871f935dec81c5c_icon-samples.svg" alt="" />
                        <h4>Request A<br></br>Sample Pack</h4>
                        <img src="https://assets.website-files.com/5ccc8aa73871f9d0b1c81c04/5ccc8aa73871f9c00fc81c5d_icon-samples-squiggle.svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)