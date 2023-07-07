import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { TbMoodKid, TbBrandVscode } from 'react-icons/tb';
import { BsRocketTakeoff } from 'react-icons/bs';
import { FaLinux } from 'react-icons/fa';
import { Timeline } from 'rsuite';

import timelineContent from '../../data/timeline';

const Author = () => {
    return (
        <main
            className='w-screen flex flex-col justify-center items-center mt-4 mb-20 overflow-x-hidden h-full'
        >
            <section className='flex flex-col mb-4'>
                <h1
                    className='text-2xl font-semibold text-lime-950 max-sm:text-lg max-sm:text-center dark:text-lime-500'
                >
                    {'{ Guilherme Machado }'}
                </h1>

                <p
                    className='text-lg font-mono text-center leading-none max-sm:text-sm dark:text-stone-50'
                >
                    Desenvolvedor Fullstack
                </p>
            </section>

            <section className='flex gap-8 items-center'>
                <h2 className='font-semibold text-lime-950 text-lg max-sm:text-sm max-sm:font-normal dark:text-lime-500'>
                    Siga-me:
                </h2>
                
                <section className='flex gap-4'>
                    <Link
                        to="https://github.com/machadofguilherme"
                        target='__blank'
                        className='text-xl transition-colors hover:opacity-75 rounded-2xl max-sm:text-sm'
                    >
                        <FiGithub className='fill-black dark:fill-white'/>
                    </Link>

                    <Link
                        to="https://www.linkedin.com/in/machadocode/"
                        target='__blank'
                        className='text-xl transition-colors hover:opacity-75 rounded-2xl max-sm:text-sm'
                    >
                        <FiLinkedin className='fill-sky-500' />
                    </Link>
                </section>
            </section>

            <section className='flex flex-col items-center justify-center w-2/4 max-sm:w-screen max-sm:ml-6 max-sm:mr-4'>
                <Timeline className='w-3/4 mt-4' align='right'>
                    <Timeline.Item dot={<TbMoodKid className='text-4xl fill-lime-950 dark:text-4xl dark:fill-lime-500'/>}>
                        <h3
                            className='text-lg dark:text-lg text-left text-lime-950 dark:text-lime-500 font-semibold'
                        >
                            {timelineContent[0].title}
                        </h3>

                        <p
                            className='text-sm text-black text-justify dark:text-stone-50'
                        >
                            {timelineContent[0].description}
                        </p>

                        <img
                            src={timelineContent[0].image}
                            alt="Foto de Guilherme Machado."
                            className='rounded-md pt-2'
                        />
                    </Timeline.Item>

                    <Timeline.Item dot={<FaLinux className='text-4xl fill-lime-950 dark:text-4xl dark:fill-lime-500' />}>
                        <h3
                            className='text-lg dark:text-lg text-left text-lime-950 dark:text-lime-500 font-semibold'
                        >
                            {timelineContent[1].title}
                        </h3>

                        <p
                            className='text-sm text-black text-justify dark:text-stone-50'
                        >
                            {timelineContent[1].description}
                        </p>

                        <img
                            src={timelineContent[1].image}
                            alt="Dois pinguins brancos."
                            className='rounded-md pt-2'
                        />
                    </Timeline.Item>

                    <Timeline.Item dot={<TbBrandVscode className='text-4xl fill-lime-950 dark:text-4xl dark:fill-lime-500' />}>
                        <h3
                            className='text-lg dark:text-lg text-left text-lime-950 dark:text-lime-500 font-semibold'
                        >
                            {timelineContent[2].title}
                        </h3>

                        <p
                            className='text-sm text-black text-justify dark:text-stone-50'
                        >
                            {timelineContent[2].description}
                        </p>

                        <img
                            src={timelineContent[2].image}
                            alt="Imagem ilustrativa acerca do MERN Stack."
                            className='rounded-md pt-2'
                        />
                    </Timeline.Item>

                    <Timeline.Item dot={<BsRocketTakeoff className='text-4xl fill-lime-950 dark:text-4xl dark:fill-lime-500' />}>
                        <h3
                            className='text-lg dark:text-lg text-left text-lime-950 dark:text-lime-500 font-semibold'
                        >
                            {timelineContent[3].title}
                        </h3>

                        <p
                            className='text-sm text-black text-justify dark:text-stone-50'
                        >
                            {timelineContent[3].description}
                        </p>

                        <img
                            src={timelineContent[3].image}
                            alt="Captura de tela do Visual Studio Code."
                            className='rounded-md pt-2'
                        />
                    </Timeline.Item>
                </Timeline>                        
            </section>
        </main>
    )
}

export default Author;