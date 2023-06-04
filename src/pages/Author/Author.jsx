import { FiGithub, FiLinkedin } from 'react-icons/fi';

import './AuthorStyle.sass';
import { Link } from 'react-router-dom';

const Author = () => {
    return (
        <main className="author__container">
            <section>
                <h1>Guilherme Machado</h1>
            </section>
            <section className='social'>
                <h2>Siga-me:</h2>
                <section className='social'>
                    <Link to="https://github.com/machadofguilherme" target='__blank'>
                        <FiGithub />
                    </Link>

                    <Link to="https://www.linkedin.com/in/machadocode/" target='__blank'>
                        <FiLinkedin />
                    </Link>
                </section>
            </section>
            <section>
                <p>Muito prazer! Chamo-me Guilherme e sou desenvolvedor web Fullstack.</p>
                <p>Desde muito cedo fui fascinado pela curiosidade. Sempre quis saber
                    como as coisas são e porque são assim.</p>
                <p>Em meio a perguntas fui me interessando pelo tema <em>geek</em> de um
                    modo geral. Quando eu era criança, essas perguntas me levaram a
                    desmontar o meu computador só para ver como ele era por dentro.</p>
                <p>Chegou um período da minha vida que eu estava cansado de utilizar o
                    sistema operacional Windows que costuma vir de fábrica por padrão em
                    máquinas recém compradas pelo consumidor. Isso me fez buscar por uma
                    alternativa diferente, então encontrei o Linux em uma pesquisa pelo
                    <em>Google</em>. Instalei o Ubuntu, distribuição que me forneceu o
                    meu primeiro contato com esse tipo de ambiente. Dessa forma,
                    embarquei em uma aventura totalmente nova e com um certo receio,
                    pois não sabia o que poderia dar errado. Poderia, por exemplo,
                    perder todos os arquivos que cultivei por vários anos de uma única
                    vez. Mesmo assim fui em frente e instalei o Ubuntu na minha máquina.
                    Eu me senti incrível. Era tudo novo e diferente para mim. Isso me
                    motivou a ir atrás, ler a respeito e procurar aprender a realizar as
                    coisas em um ambiente totalmente aquém do que me era conhecido. Com
                    isso, foi-me apresentado o Shell Script. A primeira linguagem de
                    programação pela qual eu tive contato.</p>
                <p>Após algum tempo de contato, fui me aprimorando e obtendo mais
                    conhecimentos acerca do ambiente Linux como um todo. Com isso,
                    decidi que queria viver do desenvolvimento. Pois gostava da ideia de
                    poder criar as minhas próprias coisas sem depender de terceiros para
                    isso. Dessa maneira, fui levado a pesquisar no YouTube por conteúdos
                    relacionados e com isso tive contato com o Desenvolvimento Web.</p>
                <p>Até então, eu mexia na internet todos os dias sem ter a mínima ideia
                    de como ela funcionava por traz dos panos.</p>
                <p>Dessa forma aprendi HTML e CSS no canal <em>Curso em Vídeo</em>.
                    Porém, não queria parar por aí. Indo mais a fundo acabei por
                    conhecer a Trybe, uma escola de programação com um curso de
                    Desenvolvimento Web focada em habilidades técnicas e sociais, com
                    uma duração superior a 1500 horas contendo aulas e projetos.</p>
                <p>Inicialmente não pensei que fosse capaz de passar pelo processo
                    seletivo. Mas consegui a aprovação. Isso foi em 2022.</p>
                <p>Esse <strong>sistema de blog</strong> é o resultado do meu
                    aprendizado. Desenvolvido em React no Frontend, NodeJS no Backend e
                    MongoDB como banco de dados, o sistema me permite publicar postagens
                    que são salvas em um banco de dados na <em>nuvem</em> e essas
                    postagens são retornadas pela API, onde as informações são
                    renderizadas no Frontend dessa aplicação.</p>
                <p>A história continua todos os dias e espero que você possa acompanhar
                    ela ao meu lado.</p>
            </section>
        </main>
    )
}

export default Author