import React from 'react';
import PropTypes from 'prop-types';
import State from '../hooks/State'
import { LocaleContext } from '../context/Context'
 
function LoginInput ({login}) {
  const { locale } = React.useContext(LocaleContext);
  const [email, onEmailChangeHandler] = State('');
  const [password, onPasswordChangeHandler] = State('');


  function onSubmitHandler(event) {
    event.preventDefault();

    login({
      email: email,
      password: password,
    });
  }

    return (
      <form onSubmit={onSubmitHandler} className='login-input'>
        <input className='email' type='email' placeholder='Email' value={email} onChange={onEmailChangeHandler} />
        <input className='password' type='password' placeholder='Password' value={password} onChange={onPasswordChangeHandler} />
        <button className='login'>{locale === 'id' ? 'Masuk' : 'Log in'}</button>
      </form>
    );
  }
 
LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}
 
export default LoginInput;