import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">Sequoia Engineering & Consulting Group</Link>
      </div>
      <div className={styles.navbtn}>
        <div>
                  <Link to="./home"
                      className={styles.btn1}>
            HOME
          </Link>
        </div>
        <div>
          <Link to="./business" className={styles.btn1}>
            OUR BUSINESS
          </Link>
        </div>
        <div>
          <Link to="./service" className={styles.btn1}>
            SERVICES
          </Link>
        </div>
        <div>
          <Link to="./team" className={styles.btn1}>
            OUR TEAM
          </Link>
        </div>
        <div>
          <Link to="./contact" className={styles.btn1}>
            CONTACT
          </Link>
        </div>
          </div>
          
      </div>
      
  );
}

export default Navbar