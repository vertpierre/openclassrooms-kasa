import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import Banner from '../../molecules/Banner/Banner';
import Card from '../../molecules/Card/Card';
import useFetch from '../../utils/hooks/UseFetch';
import { Navigate } from 'react-router-dom';
import homeImage from '../../../public/assets/images/home.webp';

const Home = () => {
    const {
        data: properties,
        loading,
        error,
    } = useFetch('/server/properties_data.json');

    if (loading) return <div>Loading...</div>;
    if (error) return <Navigate to="/error" />;

    return (
        <div className={styles.home}>
            <Banner
                title={['Chez vous, ', <br key="br" />, 'partout et ailleurs']}
                image={homeImage}
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

export default Home;
