import { Link } from 'react-router-dom';

const Topbar = () => (
    <nav>
        <section>
            <Link to={'/'}>
              { '{ macode }' }
            </Link>
        </section>
        <form>
            <input type='text' placeholder='react' />
            <button type='button'>Pesquisar</button>
        </form>
    </nav>
);

export default Topbar;
