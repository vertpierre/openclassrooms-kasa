import {
    BrowserRouter as Router,
    Route,
    Routes,
    useParams,
    Navigate,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import About from './pages/About/About';
import Property from './pages/Property/Property';
import MainLayout from './layouts/MainLayout/MainLayout';
import useFetch from './utils/hooks/UseFetch';

const PropertyRedirect = () => {
    const { id } = useParams();
    const { data, loading, error } = useFetch(`server/properties_data.json`);

    if (loading) return <div>Chargement...</div>;
    if (error) return <Navigate to="/error" />;
    if (data.map((property) => property.id).includes(id)) {
        return <Property />;
    } else {
        return <Navigate to="/error" />;
    }
};

const App = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/property/:id"
                        element={<PropertyRedirect />}
                    />
                    <Route path="*" element={<Error />} />
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default App;
