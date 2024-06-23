import KasaLogo from '../../layouts/Logo/Kasa';
import styles from './Footer.module.scss';

function Footer() {
    return (
        <footer className={styles.footer}>
            <KasaLogo fill={styles.colorSecondary} height={styles.logoFooter} />
            <p>© 2024 Kasa. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
