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
      <form onSubmit={onSubmitHandler} className='outline-none rounded-md py-2 px-6 font-medium flex flex-col items-center '>
        <input className='text-lg mt-4 bg-transparent mb-6 py-2 px-10 rounded-lg border  border-solid mx-auto' type='email' placeholder='Email' value={email} onChange={onEmailChangeHandler} />
        <input className='text-lg mt-4 bg-transparent mb-6 py-2 px-10 rounded-lg border border-solid mx-auto' type='password' placeholder='Password' value={password} onChange={onPasswordChangeHandler} />
        <button className='text-lg mt-4 bg-transparent mb-6 py-2 px-10 rounded-lg border border-solid mx-auto'>{locale === 'id' ? 'Masuk' : 'Log in'}</button>
      </form>
    );
  }
 
LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}
 
export default LoginInput;