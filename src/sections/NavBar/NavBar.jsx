import styles from "./NavBarStyles.module.css"
import logo from "../../assets/fresh-burger.png"
function NavBar() {
  return (
    <nav className={styles.navbar}>
        <div className={styles.leftlogo}>
            <img className={styles.logoImage}  src={logo} alt="Web logo"/>
        </div>
        
        <ul className={styles.navmenu}>
            <li><a href="#hero">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  )
}

export default NavBar
