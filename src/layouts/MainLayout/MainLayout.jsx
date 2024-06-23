import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './MainLayout.module.scss';

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node,
};

export default MainLayout;
