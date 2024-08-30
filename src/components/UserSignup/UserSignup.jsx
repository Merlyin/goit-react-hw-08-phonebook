import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import css from './UserSignup.module.css';
export default function UserSignup() {
  const dispatch = useDispatch();
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
  };

  return (
    <>
      <div className='container'>
        <section>
        <div className={css.fillIn}></div>
          <nav className={css.navigationMenu}>
            <Link className={css.button} role="button" as={Link} to="/"><span className={css.text}>Home</span></Link>
            <Link className={css.button} role="button" as={Link} to="/login"><span className={css.text}>Login</span></Link>
          </nav>
          <div className={css.mainBody}>
            <h1><span className={css.title}>Signup</span></h1>
            <form className={css.form} onSubmit={handleSubmit}>
              <label>
                Username
              </label>
              <input
                  type="text"
                  value={name}
                  onChange={event => setUsername(event.target.value)}
                />
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
              <button className={css.button2} type="submit">Signup</button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}