import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../component/RegisterInput';
import { register } from '../utils/api';
import { LocaleContext } from '../context/Context';
 
function RegisterPage() {
    const navigate = useNavigate();
    const {locale} = React.useContext(LocaleContext);

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }
 
  return (
    <section className='register-page'>
      <h2 className='regis'>{locale === 'id' ? 'DAFTAR ' : 'REGISTER'}</h2>
      <RegisterInput register={onRegisterHandler} />
      <p>{locale === 'id' ? 'Kembali ke ' : 'Back to '}<Link to="/">{locale === 'id' ? 'Masuk' : 'Login'}</Link></p>
    </section>
  )
}
 
export default RegisterPage;