import React from 'react';
import ProjectCard from './projectcard/ProjectCard';
import R6Thumb from '../../assets/thumbproject/R6Pairs.png';
import TDGThumb from '../../assets/thumbproject/TerreDeGeek.png';
import BankyyThumb from '../../assets/thumbproject/Bankyy.png';
import NorImmoThumb from '../../assets/thumbproject/NorImmo.png';
import PenduThumb from '../../assets/thumbproject/Pendu.png';
import ChifoumiThumb from '../../assets/thumbproject/Chifoumi.jpg';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state= { 
            project:  [
                {
                    name: 'Jeu des paires',
                    tech: 'Javascript, HTML, CSS, Bootstrap, Responsive',
                    description: "Un jeu des paires responsive dans l'univers de Rainbow Six Siege. Intégration de changement des cartes selon le viewport",
                    url: "https://github.com/AxelJarni/R6_Pairs",
                    urlpage: "https://axeljarni.github.io/R6_Pairs/",
                    img: R6Thumb
                },
                {
                    name: 'Terre de Geek',
                    tech: 'HTML, CSS, Bootstrap, Responsive',
                    description: "Creation d'une base pour un site vitrine et responsive a destination d'une boutique de vente de produits technologiques.",
                    url: "https://github.com/AxelJarni/TerreDeGeek",
                    urlpage: "https://axeljarni.github.io/TerreDeGeek/",
                    img: TDGThumb
                },
                {
                    name: 'Bankyy',
                    tech: 'HTML, CSS, Javascript, Ajax, Bootstrap, Responsive',
                    description: "Creation d'une app web simulant une gestion de compte en banque et en utilisant Ajax pour des requetes API",
                    url: "https://github.com/AxelJarni/Bankyy",
                    urlpage: "https://axeljarni.github.io/Bankyy/",
                    img: BankyyThumb
                },
                {
                    name: 'NorImmo',
                    tech: 'Javascript, HTML, CSS, Bootstrap, Responsive',
                    description: "Projet de groupe d'un site vitrine d'agence immobilière intégrant multiples fonctionnalités en Javascript(slideshow, estimation de projet,...).",
                    url: "https://github.com/FlorentGallou-Dev/norImmo",
                    urlpage: "https://florentgallou-dev.github.io/norImmo/",
                    img: NorImmoThumb
                },
                {
                    name: 'Jeu du Pendu',
                    tech: 'Javascript',
                    description: "Jeu du pendu crée en début de formation et en utilisant uniquement Javascript dans un but de compréhension des algorythmes intermédiaires.",
                    url: "https://github.com/AxelJarni/Pendu_Game",
                    urlpage: "https://axeljarni.github.io/Pendu_Game/",
                    img: PenduThumb
                },
                {
                    name: 'Chifoumi',
                    tech: 'Javascript',
                    description: "Chifoumi crée en début de formation et en utilisant uniquement Javascript afin d'initier aux algorythmes simples",
                    url: "https://github.com/AxelJarni/Chifoumi",
                    urlpage: "https://axeljarni.github.io/Chifoumi/",
                    img: ChifoumiThumb
                },
            ]
        }
    }

    render() {
        let projectCards = this.state.project.map(project => {
            return(
                <ProjectCard project={project}/>
            );
            });
        return(
            <section id='projects' className='container mt-1 mb-5 offsetanchor'>
                <h3 className='my-3'>Portfolio</h3>
                <h5 className='mb-5'>Une partie de mes projets réalisés jusque là.</h5>
                <div className='row'>
                    {projectCards}
                </div>
            </section>
        );
    };
}

export default Projects;