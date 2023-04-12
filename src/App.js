import React, { useState , useMemo, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Navigation from './component/Navigation';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from '../src/pages/LoginPage';
import loading from '../src/img/Loading.gif';
import { getUserLogged, putAccessToken } from '../src/utils/api';
import { LocaleContext, ThemeContext } from '../src/context/Context';

function App() {
  const [authedUser, setAuthedUser] = useState(localStorage.getItem('auth') || null);
  const [initializing, setInitializing] = useState(false);
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'id')
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  async function onLoginSuccess({ accessToken }){
    setInitializing(true)
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(() => {
      return data;
    })
    localStorage.setItem('auth', data);
    setInitializing(false)
  }

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === 'id' ? 'en' : 'id';
      localStorage.setItem('locale', newLocale);
      return newLocale;
    });
    
  }

  const localeContextValue = useMemo(() => {
    
    return {
      locale,
      toggleLocale
    };
  }, [locale]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });

  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme
    };
  }, [theme]);

  const onLogout = () => {
    setAuthedUser(() => {
      return null;
    })
    localStorage.removeItem('auth');
  }

  if (initializing) {
    return (
      <img className='ing' src={loading} alt='loading'/>
    )
  }
  return (
    <ThemeContext.Provider value={themeContextValue}>
    <LocaleContext.Provider value={localeContextValue}>
      <div className='app-container'>
        <header className='nav-item'>
          <h1 id='background-text' className='nav-item'><Link to='/'>{locale === 'id' ? 'Aplikasi Catatan' : 'Notes Application'}</Link></h1>
          <Navigation logout={onLogout} authed={authedUser} /> 
        </header>
        <main>
          {authedUser ?
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/notes/:id" element={<DetailPage />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/archive" element={<ArchivePage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
            : <Routes>
                <Route path="*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            }  
        </main>
      </div>
    </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
