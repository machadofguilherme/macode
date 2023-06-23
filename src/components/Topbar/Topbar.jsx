import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

import './TopbarStyle.sass';
import { dataRequest } from '../../utils/fetchApi';
import AppContext from '../../context/AppContext';

const Topbar = () => {
    const [query, setQuery] = useState('');
    const { saveDataTag } = useContext(AppContext)
    const location = useLocation();

    const searchPost = async () => {
        const body = {
            tag: query
        }

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
            || location.pathname.includes('/projects')
                ? true
                : false;

    return (
        <nav className='topbar'>
            <section>
                <Link to={'/'}>
                { '{} macode' }
                </Link>
            </section>
            <section className='links'>
                <Link to={'/author'}>
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
                            onChange={({ target }) => setQuery(String(target.value).toLowerCase().trim())}
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
