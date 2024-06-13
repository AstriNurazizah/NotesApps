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
    <section className='border rounded-md p-3 px-4 font-extralight '>
      <h2 className='text-center p-5 font-semibold'>{locale === 'id' ? 'DAFTAR ' : 'REGISTER'}</h2>
      <RegisterInput register={onRegisterHandler} />
      <p className='text-center my-5 mx-auto'>{locale === 'id' ? 'Kembali ke ' : 'Back to '}<Link to="/">{locale === 'id' ? 'Masuk' : 'Login'}</Link></p>
    </section>
  )
}
 
export default RegisterPage;