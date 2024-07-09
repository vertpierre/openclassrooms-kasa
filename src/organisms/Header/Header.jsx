import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import Logo from '../../atoms/Logo/Logo';

const Header = () => {
    return (
        <header className={styles.header}>
            <NavLink to="/">
                <Logo
                    fill={styles.colorPrimary}
                    height={styles.logoHeader}
                />
            </NavLink>
            <nav className={styles.nav}>
                <NavLink
                    to="/"
                    className={({ isActive }) => {
                        return isActive
                            ? `${styles.active} ${styles.link}`
                            : styles.link;
                    }}
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => {
                        return isActive
                            ? `${styles.active} ${styles.link}`
                            : styles.link;
                    }}
                >
                    A propos
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
