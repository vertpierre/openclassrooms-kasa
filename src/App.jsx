import {
    BrowserRouter as Router,
    Route,
    Routes,
    useParams,
    Navigate,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import About from './pages/About/About';
import Property from './pages/Property/Property';
import MainLayout from './layouts/MainLayout/MainLayout';
import useFetch from './utils/hooks/UseFetch';

const PropertyRedirect = ({ properties }) => {
    const { id } = useParams();

    // Find the property that matches the id from the URL
    const selectedProperty = properties.find((property) => property.id === id);

    if (selectedProperty) {
        // If a matching property is found, return all its data
        return <Property property={selectedProperty} />;
    } else {
        // If no matching property is found, redirect to the error page
        return <Navigate to="/error" />;
    }
};

PropertyRedirect.propTypes = {
    properties: PropTypes.array.isRequired,
};

const App = () => {
    const {
        data: properties,
        loading,
        error,
    } = useFetch('server/properties_data.json');

    if (loading) return <div></div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home properties={properties} />}
                    />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/property/:id"
                        element={<PropertyRedirect properties={properties} />}
                    />
                    <Route path="*" element={<Error />} />
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default App;
