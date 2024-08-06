import styles from "./NavBarStyles.module.css"
import logo from "../../assets/fresh-burger.png"
function NavBar() {
  return (
    <nav className={styles.container}>
        <img className={styles.logoImage}  src={logo} alt="Web logo"/>
        <ul className={styles.navmenu}>
            <li><a href="#hero"><h2>About</h2></a></li>
            <li><a href="#projects"><h2>Projects</h2></a></li>
            <li><a href="#skills"><h2>Skills</h2></a></li>
            <li><a href="#contact"><h2>Contact</h2></a></li>
        </ul>
    </nav>
  )
}

export default NavBar
