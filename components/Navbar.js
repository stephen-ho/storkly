import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Navbar = () => {
    return (
        <nav className={navStyles.nav}>
            <ul className={navStyles.navbar}>
                <li>
                    <Link className={navStyles.navbarLink} href='/'>Home</Link>
                </li>
                <li>
                    <Link className={navStyles.navbarLink} href='/register'>Register</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;