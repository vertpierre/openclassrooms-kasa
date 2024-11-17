import { useParams, Navigate } from 'react-router-dom';
import Slideshow from '../../molecules/Slideshow/Slideshow';
import Rating from '../../molecules/Rating/Rating';
import Tag from '../../molecules/Tag/Tag';
import Collapse from '../../molecules/Collapse/Collapse';
import useFetch from '../../utils/hooks/UseFetch';
import styles from './Property.module.scss';

const Property = () => {
    const { id } = useParams();
    const {
        data: properties,
        loading,
        error,
    } = useFetch('/properties_data.json');

    if (loading) return <div>Loading...</div>;
    if (error) return <Navigate to="/notfound" />;

    const property = properties?.find((property) => property.id === id);
    if (!property) return <Navigate to="/notfound" />;

    return (
        <div>
            <Slideshow images={property.pictures} />
            <div className={styles.info}>
                <div className={styles.containerInfos}>
                    <section className={styles.infoProperty}>
                        <h1 className={styles.title}>{property.title}</h1>
                        <p>{property.location}</p>
                        <Tag tags={property.tags} />
                    </section>
                    <div className={styles.containerHostRating}>
                        <section className={styles.host}>
                            <p className={styles.hostName}>
                                {property.host.name.split(' ')[0]}
                                <br />
                                {property.host.name
                                    .split(' ')
                                    .slice(1)
                                    .join(' ')}
                            </p>
                            <img
                                className={styles.hostImg}
                                src={property.host.picture}
                                alt="host"
                            />
                        </section>
                        <section className={styles.infoRating}>
                            <Rating
                                rating={property.rating}
                                activeColor="#FF6060"
                                inactiveColor="#E3E3E3"
                                height={styles.ratingSize}
                            />
                        </section>
                    </div>
                </div>
                <section className={styles.infoCollapse}>
                    <Collapse
                        title="Description"
                        content={property.description}
                    />
                    <Collapse
                        title="Équipements"
                        content={property.equipments}
                    />
                </section>
            </div>
        </div>
    );
};

export default Property;
