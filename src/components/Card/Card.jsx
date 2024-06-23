import PropTypes from 'prop-types';
import styles from './Card.module.scss';

const Card = ({ image, title }) => {
    return (
        <article className={styles.card}>
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>{title}</h3>
            </div>
        </article>
    );
};

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Card;
