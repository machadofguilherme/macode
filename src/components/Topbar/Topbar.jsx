import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

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
      <nav className="w-screen flex bg-lime-950 h-12 justify-evenly items-center">
        <section className="text-stone-50 font-bold text-xl">
          <a href="/" onClick={() => renderNavigation()}>
            {"{} macode"}
          </a>
        </section>
        
        <section className="text-stone-50 font-normal text-base pt-0.5 max-sm:hidden">
          <Link to={"/author"} onClick={() => renderNavigation()}>
            O Autor
          </Link>
        </section>

        <form className="flex items-center max-sm:hidden">
          {!isDisabled && (
            <>
              <input
                type="text"
                placeholder="Exemplo: react"
                value={query}
                maxLength={15}
                onChange={({ target }) =>
                  setQuery(String(target.value).toLowerCase().trim())
                }
                onKeyDown={searchPostToPressEnter}
                disabled={isDisabled}
                className="h-6 indent-1.5 rounded-t-md rounded-tr-none rounded-b-md rounded-br-none placeholder:text-black placeholder:text-sm text-sm lowercase w-36"
              />

              <button
                type="button"
                onClick={searchPost}
                className="h-6 w-6 bg-stone-50 rounded-tr-md rounded-br-md text-lime-950 font-semibold"
              >
                <BsSearch />
              </button>
            </>
          )}
        </form>

        <section className="sm:hidden">
          <Link to={'/author'} className='text-sm font-light text-stone-50 hover:underline'>
            O Autor
          </Link>
        </section>
      </nav>
    );
};

export default Topbar;
