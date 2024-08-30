import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/useAuth';
import css from './UserLogin.module.css';

export default function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts');
    } else {
      // navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await dispatch(login({ email, password }));
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div className="container">
      <div className={css.fillIn}></div>
      <nav className={css.navigationMenu}>
        <Link className={css.button} role="button" as={Link} to="/"><span className={css.text}>Home</span></Link>
        <Link className={css.button} role="button" as={Link} to="/Register"><span className={css.text}>Register</span></Link>
      </nav>
      <div className={css.mainBody}>
        <h1><span className={css.title}>Login</span></h1>
        <form className={css.form} onSubmit={handleSubmit}>
          <label>
            Email
            
          </label>
          <input
              type="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          <label>
            Password
            
          </label>
          <input
              type="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
            


          <button className={css.button2} type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}