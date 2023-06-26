import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

import './TopbarStyle.sass';
import { dataRequest } from '../../utils/fetchApi';
import AppContext from '../../context/AppContext';
import renderNavigation from '../../utils/renderNavigation';

const Topbar = () => {
    const [query, setQuery] = useState('');
    const { saveDataTag } = useContext(AppContext)
    const location = useLocation();

    const searchPost = async () => {
        const body = {
            tag: query
        }

        localStorage.setItem('filter', 'nada');
        const result = await dataRequest('/tag', body);
        saveDataTag(result);
    }
    
    const searchPostToPressEnter = (e) => {        
        const key = e.key;
        if (key === 'Enter') {
            e.preventDefault();
            searchPost();
        }
    }

    const isDisabled = location
        .pathname.includes('/post')
            || location.pathname.includes('/author')
                ? true
                : false;

    return (
        <nav className='topbar'>
            <section>
                <a href="/" onClick={() => renderNavigation()}>
                { '{} macode' }
                </a>
            </section>
            <section className='links'>
                <Link to={'/author'} onClick={() => renderNavigation()}>
                    O Autor
                </Link>
            </section>
            <form>
                {
                    !isDisabled && (
                        <>
                            <input
                                type='text'
                                placeholder='react'
                                value={query}
                                onChange={
                                    ({ target }) => setQuery(String(target.value)
                                        .toLowerCase().trim())
                                }
                                onKeyDown={searchPostToPressEnter}
                                disabled={isDisabled}
                        />
                            <button type='button' onClick={searchPost}>
                                <BsSearch />
                            </button>
                        </>
                    )
                }
            </form>
        </nav>
    )
};

export default Topbar;
