import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../component/LoginInput';
import { login } from '../utils/api';
import { LocaleContext } from '../context/Context';
 
function LoginPage({ loginSuccess }) {
  const {locale} = React.useContext(LocaleContext);

  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
 
    if (!error) {
      loginSuccess(data);
    }
  }
 
  return (
    <section className='login-page'>
      <h2 className='log'>{locale === 'id' ? 'MASUK' : " LOG IN "}</h2>
      <LoginInput login={onLogin} />
      <p>{locale === 'id' ? 'Belum punya akun ? ' : "Doesn't have an account ? "}<Link to="/register">{locale === 'id' ? 'Daftar di sini' : 'Register here' }</Link></p>
    </section>
  );
}
 
LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
}
 
export default LoginPage;