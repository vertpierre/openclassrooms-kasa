import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import NotFoundPage from './pages/NotFound/NotFound';
import AboutPage from './pages/About/About';
import PropertyPage from './pages/Property/Property';
import MainTemplate from './templates/MainTemplate/MainTemplate';

const App = () => {
    return (
        <Router>
            <MainTemplate>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/property/:id" element={<PropertyPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </MainTemplate>
        </Router>
    );
};

export default App;
