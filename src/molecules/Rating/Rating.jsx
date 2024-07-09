import PropTypes from 'prop-types';
import Star from '../../atoms/Star/Star';
import styles from './Rating.module.scss';

const Rating = ({ rating, activeColor, inactiveColor, height }) => {
    return (
        <div className={styles.rating} style={{ gap: `calc(${height} / 2)` }}>
            {[...Array(5)].map((e, index) => (
                <Star
                    key={index}
                    fill={index < rating ? activeColor : inactiveColor}
                    height={height}
                />
            ))}
        </div>
    );
};

Rating.propTypes = {
    rating: PropTypes.string.isRequired,
    activeColor: PropTypes.string,
    inactiveColor: PropTypes.string,
    height: PropTypes.string,
};

export default Rating;
