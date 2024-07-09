import { NavLink } from 'react-router-dom';
import styles from './Error.module.scss';

const NotFound = () => {
    return (
        <div className={styles.error}>
            <h1 className={styles.errorCode}>404</h1>
            <h2 className={styles.errorMessage}>Oups! La page que <br />vous demandez n&apos;existe pas.</h2>
            <NavLink className={styles.link} to="/">Retourner sur la page d&apos;accueil</NavLink>
        </div>
    );
};

export default NotFound;
