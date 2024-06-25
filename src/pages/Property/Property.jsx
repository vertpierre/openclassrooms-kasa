import PropTypes from 'prop-types';
import Carousel from '../../components/Slideshow/Slideshow';

const Property = ({ property }) => {
    return (    
        <div>
            <Carousel images={property.pictures} />
        </div>
    );
};

Property.propTypes = {
    property: PropTypes.object.isRequired,
};

export default Property;
