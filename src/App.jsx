import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import About from './pages/About/About';
import Property from './pages/Property/Property';
import MainLayout from './layouts/MainLayout/MainLayout';

const App = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/property/:id" element={<Property />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default App;
