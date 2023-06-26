import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"

import './AuthorStyle.sass';
import timelineContent from '../../data/timeline';
import "react-vertical-timeline-component/style.min.css"

const Author = () => {
    const iconStyle = {
        backgroundColor: '#1E5128',
        textAlign: 'center',
        paddingTop: '.2rem',
        fontSize: '32px'
    }

    return (
        <main className="author__container">
            <section>
                <h1>{'{ Guilherme Machado }' }</h1>
                <p className='author__subtitle'>
                    Desenvolvedor Fullstack
                </p>
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
            <VerticalTimeline>
                {
                    timelineContent.map((element, index) => {
                        return (
                            <VerticalTimelineElement
                                key={index}
                                iconStyle={iconStyle}
                                icon={element.icon}
                            >
                                <div className='timeline__container'>
                                    <section>
                                        <h2 className="vertical-timeline-element-title">
                                            {element.title}
                                        </h2>
                                        <p id="description">{element.description}</p>
                                    </section>
                                    <section>
                                        <img src={element.image} alt={element.title} />
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

export default Author