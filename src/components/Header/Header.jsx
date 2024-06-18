import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <NavLink
                to="/"
                style={({ isActive }) => {
                    return {
                        color: isActive ? 'red' : 'inherit',
                    };
                }}
                className={({ isActive, isPending }) => {
                    return isActive ? 'active' : isPending ? 'pending' : '';
                }}
            >
                <img alt="Logo Kasa" />
            </NavLink>
            <nav>
                <NavLink
                    to="/"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? 'red' : 'inherit',
                        };
                    }}
                    className={({ isActive, isPending }) => {
                        return isActive ? 'active' : isPending ? 'pending' : '';
                    }}
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? 'red' : 'inherit',
                        };
                    }}
                    className={({ isActive, isPending }) => {
                        return isActive ? 'active' : isPending ? 'pending' : '';
                    }}
                >
                    A propos
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
