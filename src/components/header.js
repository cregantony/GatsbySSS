import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"
import styles from "../CSS-MODULES/header.module.css"
// import NavDrawer from "./NavDrawer"

class Header extends React.Component {


  constructor(props) {
    super(props);
    this.state = {showModal: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  }
  



  render() {
    const navdr = (
    <div className={styles.container}>
       <div className="exit" onClick={this.handleClick}>
          Exit
        </div>
              <div>Test1</div>
              <div>Test1</div>
              <div>Test1</div>     
      </div>
    )


    return (
      <header className={styles.headerSSS}>
      <div className={styles.navWrapper}    >
        <div className={styles.navLeft} >
          <div className={styles.menu} onClick={this.handleClick}>Menu</div>
          <Link to="/"> <img width={'100%'} src={logo} alt="Super Soft Logo"/> {/* Removes the sitetitle metadata {siteTitle} */}
          </Link>
        </div>
        <div><div className={styles.navMiddle} ></div>
        </div>
        <div className={styles.navRight} >
          <div>Button</div>
        </div>      
      </div>
      {this.state.showModal ? navdr : ''}
    </header>
    )
  }
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header