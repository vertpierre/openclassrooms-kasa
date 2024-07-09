import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import About from './pages/About/About';
import Property from './pages/Property/Property';
import MainTemplate from './templates/MainTemplate/MainTemplate';

const App = () => {
    return (
        <Router>
            <MainTemplate>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/property/:id" element={<Property />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </MainTemplate>
        </Router>
    );
};

export default App;
