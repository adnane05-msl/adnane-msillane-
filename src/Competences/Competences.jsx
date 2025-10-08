import React from 'react'
import './Competences.css'
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import javaScript from '../assets/images/javaScript.png'
import react from '../assets/images/react.png'
import git from '../assets/images/Git.png'
import github from '../assets/images/GitHub.png'
import bootdtrap from '../assets/images/Bootstrap.png'
import vsCode from '../assets/images/vsCode.png'
import photoshop from '../assets/images/photoshop.png'
import ContentCompetences from './ContentCompetences'



function Competences() {
    const infoSkills = [
        { id: 1,     img: html,         title: "HTML",         },
        { id: 2,     img: css,          title: "CSS",          },
        { id: 3,     img: javaScript,   title: "JavaScript",   },
        { id: 4,     img: react,        title: "React",        },
        { id: 5,     img: bootdtrap,    title: "Bootstrap",    },
        { id: 6,     img: github,       title: "GitHub",       },
        { id: 7,     img: git,          title: "Git",          },
        { id: 8,     img: photoshop,    title: "Photoshop",    },
        { id: 9,     img: vsCode,       title: "VS Code",      },
    ]

    return (
        <div className='competences page'>
            <div className='competences-titre'>
                <h2>Compétences</h2>
            </div>
            <div className='competences-content'>
                {infoSkills.map(skill=>
                    <div key={skill.id}>
                        <ContentCompetences
                            img={skill.img}
                            title={skill.title}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Competences
