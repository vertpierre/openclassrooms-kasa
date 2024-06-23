import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Collapse.module.scss';

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.collapse}>
            <div className={styles.collapseButton}>
                {title}
                <button
                    className={`${styles.arrow} ${
                        isOpen ? styles.arrowOpen : ''
                    }`}
                    aria-hidden="true"
                    aria-expanded={isOpen}
                    aria-controls="collapse-content"
                    onClick={toggleCollapse}
                >
                    <img src="src/assets/icons/arrow_list.svg" alt="" />
                </button>
            </div>
            <div
                id="collapse-content"
                className={`${styles.collapseContent} ${
                    isOpen ? styles.contentOpen : ''
                }`}
                aria-hidden={!isOpen}
            >
                {Array.isArray(content) ? (
                    <ul>
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{content}</p>
                )}
            </div>
        </div>
    );
};

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
};

export default Collapse;
