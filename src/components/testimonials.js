// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styles from "../CSS-MODULES/testimonials.module.css"

export default () =>
<div className={styles.mainTestimonialContainer}>
<div className={styles.testimonialContainer}>
    <div className={styles.contentContainer}>
        <h4>Customer reviews</h4>
        <p>“Super Soft's service helps us meet our goals in terms of price and quality so that we can focus on the importance of our message and our brand.”</p>
        <div className={styles.reviewContainer}>
            <img className={styles.reviewIcon} src="https://assets.website-files.com/5ccc8aa73871f9d12dc81c1b/5d24f2389f218c52aa2d64b1_22157234_389371221482213_9013782765295894528_n.jpg" alt="ok"/>
            <div className={styles.starsContentContainer}>
                <h5>Lindsay W.</h5>
                <h6>Brooklyn, NY</h6>
                <div className={styles.starContainer}>
                <img src="https://img.icons8.com/material-sharp/24/000000/star.png" alt="star"/>
                <img src="https://img.icons8.com/material-sharp/24/000000/star.png" alt="star"/>
                <img src="https://img.icons8.com/material-sharp/24/000000/star.png" alt="star"/>
                <img src="https://img.icons8.com/material-sharp/24/000000/star.png" alt="star"/>
                <img src="https://img.icons8.com/material-sharp/24/000000/star.png" alt="star"/>
                </div>
            </div>
        </div>

    </div>
    <div className={styles.imageContainer}>
        <img src="https://assets.website-files.com/5ccc8aa73871f9d12dc81c1b/5cf18dc3feecffea3f7e56c2_sendit.jpg" alt= "love"/>
    </div>
</div>
<div className={styles.allReviewContainer}>
    <h4>See what other people are saying</h4>
    <div className={styles.allReviewSection}>
        <div className={styles.allStarContainer}>
                <img src="https://img.icons8.com/material-sharp/24/000000/star.png" alt="star"/>
                <img src="https://img.icons8.com/material-sharp/24/000000/star.png" alt="star"/>
                <img src="https://img.icons8.com/material-sharp/24/000000/star.png" alt="star"/>
                <img src="https://img.icons8.com/material-sharp/24/000000/star.png" alt="star"/>
                <img src="https://img.icons8.com/material-sharp/24/000000/star.png" alt="star"/>
                <p>4.74/5.00</p>
        </div>
       
        <button>Read 1,200 more reviews </button>
     </div>
</div>
</div>