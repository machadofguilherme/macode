import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"

import timelineContent from '../../data/timeline';
import "react-vertical-timeline-component/style.min.css"
import "../../index.css";

const Author = () => {
    return (
        <main
            className='w-screen flex flex-col justify-center items-center mt-4'
        >
            <section className='flex flex-col mb-4'>
                <h1
                    className='text-2xl font-semibold text-lime-950 max-sm:text-lg max-sm:text-center'
                >
                    {'{ Guilherme Machado }'}
                </h1>

                <p
                    className='text-lg font-mono text-center leading-none max-sm:text-sm'
                >
                    Desenvolvedor Fullstack
                </p>
            </section>

            <section className='flex gap-8 items-center'>
                <h2 className='font-semibold text-lime-950 text-lg max-sm:text-sm max-sm:font-normal'>
                    Siga-me:
                </h2>
                
                <section className='flex gap-4'>
                    <Link
                        to="https://github.com/machadofguilherme"
                        target='__blank'
                        className='text-xl transition-colors hover:opacity-75 rounded-2xl max-sm:text-sm'
                    >
                        <FiGithub className='fill-black '/>
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

            <VerticalTimeline
                layout='1-column-right'
                className='w-5/12 m-auto max-sm:w-4/5'
            >
                {
                    timelineContent.map((element, index) => {
                        return (
                            <VerticalTimelineElement
                                key={index}
                                icon={element.icon}
                            >
                                <div className='timeline__container'>
                                    <section>
                                        <h2
                                            className="vertical-timeline-element-title"
                                            style={{ color: '#1a2e05', fontWeight: 500 }}
                                        >
                                            {element.title}
                                        </h2>

                                        <p
                                            id="description"
                                            className='text-justify'
                                            style={{ color: '#000000' }}
                                        >
                                            {element.description}
                                        </p>
                                    </section>
                                    
                                    <section>
                                        <img
                                            src={element.image}
                                            alt={element.title}
                                        />
                                    </section>
                                </div>
                            </VerticalTimelineElement>
                        )
                })
            }
            </VerticalTimeline>
        </main>
    )
}

export default Author;