import Logo from '../../atoms/Logo/Logo';
import styles from './Footer.module.scss';

function Footer() {
    return (
        <footer className={styles.footer}>
            <Logo fill={styles.colorSecondary} height={styles.logoFooter} />
            <p className={styles.copyright}>© 2024 Kasa. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
