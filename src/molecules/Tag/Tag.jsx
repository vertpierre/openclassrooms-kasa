import PropTypes from 'prop-types';
import styles from './Tag.module.scss';

const Tag = ({ tags }) => {
    return (
        <ul className={styles.tagList}>
            {tags.map((tag, index) => (
                <li key={index} className={styles.tag}>{tag}</li>
            ))}
        </ul>
    );
};

Tag.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tag;
