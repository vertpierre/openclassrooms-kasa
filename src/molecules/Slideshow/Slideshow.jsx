import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import styles from './Slideshow.module.scss';
import arrowIcon from '../../../assets/icons/arrow_carousel.svg';

const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState('');
    const carouselRef = useRef(null);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.classList.remove(
                styles.slideLeft,
                styles.slideRight,
            );
            void carouselRef.current.offsetWidth;
            carouselRef.current.classList.add(styles[slideDirection]);
        }
    }, [currentIndex, slideDirection]);

    const goToPrevious = () => {
        setSlideDirection('slideRight');
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1,
        );
    };

    const goToNext = () => {
        setSlideDirection('slideLeft');
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        );
    };

    if (images.length === 1) {
        return (
            <div className={styles.slideshowWrapper}>
                <figure className={styles.slide}>
                    <img
                        src={images[0]}
                        alt="Single slide"
                        className={styles.img}
                    />
                </figure>
            </div>
        );
    }

    return (
        <div className={styles.slideshowWrapper}>
            <div className={styles.arrowsContainer}>
                <button
                    onClick={goToPrevious}
                    className={`${styles.arrow} ${styles.arrowLeft}`}
                >
                    <img
                        className={styles.arrowImg}
                        src={arrowIcon}
                        alt="arrow_carousel"
                    />
                </button>
                <button
                    onClick={goToNext}
                    className={`${styles.arrow} ${styles.arrowRight}`}
                >
                    <img
                        className={styles.arrowImg}
                        src={arrowIcon}
                        alt="arrow_carousel"
                    />
                </button>
            </div>
            <div
                ref={carouselRef}
                className={styles.slideshow}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <figure
                        key={index}
                        className={`${styles.slide} ${
                            index === currentIndex ? styles.active : ''
                        }`}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className={styles.img}
                        />
                    </figure>
                ))}
            </div>
            <div className={styles.counter}>
                {currentIndex + 1}/{images.length}
            </div>
        </div>
    );
};

Slideshow.propTypes = {
    images: PropTypes.array.isRequired,
};

export default Slideshow;
