import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {FiPlusCircle,FiArchive,FiLogOut, FiSun, FiMoon } from 'react-icons/fi';
import { MdGTranslate } from 'react-icons/md';
import { LocaleContext, ThemeContext } from '../context/Context';

 
function Navigation({ logout}) {
  const { toggleLocale } = React.useContext(LocaleContext);
  const {theme, toggleTheme} = React.useContext(ThemeContext);

  return (
    <nav className='navigation'>
    {
            <ul className='list-none p-0 m-0'>
              <li className="inline-block text-2xl mx-2" onClick={toggleTheme}>{theme === 'light' ? <FiMoon size={32} /> : <FiSun size={32} />}</li>
              <li className="inline-block text-2xl mx-2" onClick={toggleLocale}><MdGTranslate size={32}/></li>
              <li className="inline-block text-3xl mx-2"><Link to="/archive"><FiArchive/></Link></li>
              <li className="inline-block text-3xl mx-2"><Link to="/add"><FiPlusCircle/></Link></li>
              <li className="inline-block text-2xl mx-2" onClick={logout}><FiLogOut size={30}/></li>
            </ul>
    }
      </nav>
      );
    }

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
};

 
export default Navigation;