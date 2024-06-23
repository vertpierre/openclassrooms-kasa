import PropTypes from 'prop-types';
import styles from './Banner.module.scss';

const Banner = ({ image, opacity = 0.4, title = '' }) => {
    return (
        <section className={styles.banner}>
            <figure className={styles.imageContainer}>
                <img
                    src={image}
                    alt={title || 'Decorative header image'}
                    className={styles.image}
                    style={{
                        opacity: opacity,
                    }}
                />
            </figure>
            {title && <h1 className={styles.title}>{title}</h1>}
        </section>
    );
};

Banner.propTypes = {
    image: PropTypes.string.isRequired,
    opacity: PropTypes.number,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default Banner;
