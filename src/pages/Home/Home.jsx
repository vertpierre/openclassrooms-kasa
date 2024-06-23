import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import PropTypes from 'prop-types';

const Home = ({ properties }) => {
    return (
        <div className={styles.home}>
            <Banner
                title={['Chez vous, ', <br key="br" />, 'partout et ailleurs']}
                image="src/assets/images/home.webp"
                opacity={0.4}
            />
            <section className={styles.cardsContainer}>
                {properties.map((property) => (
                    <Link to={`/property/${property.id}`} key={property.id}>
                        <Card title={property.title} image={property.cover} />
                    </Link>
                ))}
            </section>
        </div>
    );
};

Home.propTypes = {
    properties: PropTypes.array.isRequired,
};

export default Home;
