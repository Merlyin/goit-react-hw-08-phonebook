import { Link } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <div className="container">
      <div className={css.fillIn}></div>
      <nav className={css.navigationMenu}>
        <Link className={css.button} role="button" as={Link} to="/register"><span className={css.text}>Register</span></Link>
        <Link className={css.button} role="button" as={Link} to="/login"><span className={css.text}>Login</span></Link>
      </nav>
      
    </div>
  );
};