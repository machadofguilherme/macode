import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

import './TopbarStyle.sass';

const Topbar = () => {
    const [query, setQuery] = useState('');

    const searchPost = () => {
        console.log(query);
    }
    
    const searchPostToPressEnter = (e) => {        
        const key = e.key;
        if (key === 'Enter') {
            e.preventDefault();
            searchPost();
        }
    }

    return (
        <nav className='topbar'>
            <section>
                <Link to={'/'}>
                { '{} macode' }
                </Link>
            </section>
            <form>
                <input
                    type='text'
                    placeholder='react'
                    value={query}
                    onChange={({ target }) => setQuery(String(target.value).toLowerCase().trim())}
                    onKeyDown={searchPostToPressEnter}
                />
                
                <button type='button' onClick={searchPost}>
                    <BsSearch />
                </button>
            </form>
        </nav>
    )
};

export default Topbar;
