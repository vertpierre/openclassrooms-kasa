import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../utils/hooks/UseFetch';
import styles from './Home.module.scss';

import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';

const Home = () => {
    const {
        data: allLogements,
        loading,
        error,
    } = useFetch('server/properties_data.json');

    // State to store all logements
    const [displayedLogements, setDisplayedLogements] = useState([]);

    // Effect to set all logements when data is fetched
    useEffect(() => {
        if (allLogements) {
            setDisplayedLogements(allLogements);
        }
    }, [allLogements]);

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur : {error}</div>;

    return (
        <div className={styles.home}>
            <Banner
                title={["Chez vous, ", <br key="br" />, "partout et ailleurs"]}
                image="src/assets/images/home.webp"
                opacity={0.4}
            />
            <section className={styles.cardsContainer}>
                {displayedLogements.map((logement) => (
                    <Link to={`/property/${logement.id}`} key={logement.id}>
                        <Card
                            title={logement.title}
                            image={logement.cover}
                        />
                    </Link>
                ))}
            </section>
        </div>
    );
};

export default Home;
