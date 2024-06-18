import btn from './Footer.module.scss';

function Footer() {
    return (
        <footer>
            <img alt="kasa logo" />
            <p className={btn.green}>© 2024 Kasa. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
