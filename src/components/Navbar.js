import { NavLink } from 'react-router-dom'

import { useAuthentication } from '../hooks/useAuthentication'

import { useAuthValue } from '../context/AuthContext'

import styles from './Navbar.module.css';

const Navbar = () => {
    const { user } = useAuthValue();
    const { logout } = useAuthentication();

    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>
                Game <span>News</span>
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>
                        Home
                    </NavLink>
                </li>
                {!user && (
                    <>
                        <li>
                            <NavLink to="login" className={({ isActive }) => (isActive ? styles.active : '')}>
                                Entrar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="Register" className={({ isActive }) => (isActive ? styles.active : '')}>
                                Cadastrar
                            </NavLink>
                        </li>
                    </>
                )}
                {user && (
                    <>
                        <li>
                            <NavLink to="/posts/create" className={({ isActive }) => (isActive ? styles.active : '')}>
                                Novo Post
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="Dashboard" className={({ isActive }) => (isActive ? styles.active : '')}>
                                Dashboard
                            </NavLink>
                        </li>
                    </>
                )}

                <li>
                    <NavLink to="About" className={({ isActive }) => (isActive ? styles.active : '')}>
                        Sobre
                    </NavLink>
                </li>
                {user && (
                    <li>
                        <button onClick={logout} className={styles.leave}>Sair</button>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar