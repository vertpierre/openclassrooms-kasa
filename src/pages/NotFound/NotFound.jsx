import { NavLink } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <h1 className={styles.notFoundCode}>404</h1>
            <h2 className={styles.notFoundMessage}>
                Oups! La page que vous demandez n&apos;existe pas.
            </h2>
            <NavLink className={styles.link} to="/">
                Retourner sur la page d&apos;accueil
            </NavLink>
        </div>
    );
};

export default NotFound;
