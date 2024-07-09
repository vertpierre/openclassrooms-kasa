import PropTypes from 'prop-types';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import styles from './MainTemplate.module.scss';

const MainTemplate = ({ children }) => {
    return (
        <>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </>
    );
};

MainTemplate.propTypes = {
    children: PropTypes.node,
};

export default MainTemplate;
