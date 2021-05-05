import React from 'react';
import ProjectCard from './projectcard/ProjectCard'

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
                    urlpage: "https://axeljarni.github.io/R6_Pairs/"
                },
                {
                    name: 'Terre de Geek',
                    tech: 'HTML, CSS, Bootstrap, Responsive',
                    description: "Creation d'une base de site vitrine et responsive pour une boutique de vente de produits technologiques.",
                    url: "https://github.com/AxelJarni/TerreDeGeek",
                    urlpage: "https://axeljarni.github.io/TerreDeGeek/"
                },
                {
                    name: 'Bankyy',
                    tech: 'HTML, CSS, Javascript, Ajax, , Bootstrap, Responsive',
                    description: "Creation d'une app web simulant une gestion de compte en banque et en utilisant Ajax pour des requetes API",
                    url: "https://github.com/AxelJarni/Bankyy",
                    urlpage: "https://axeljarni.github.io/Bankyy/"
                },
                {
                    name: 'NorImmo',
                    tech: 'Javascript, HTML, CSS, Bootstrap, Responsive',
                    description: "Projet de groupe d'un site vitrine d'agence immobilière intégrant multiples fonctionnalités en Javascript(slideshow, estimation de projet,...).",
                    url: "https://github.com/FlorentGallou-Dev/norImmo",
                    urlpage: "https://florentgallou-dev.github.io/norImmo/"
                },
                {
                    name: 'Jeu du Pendu',
                    tech: 'Javascript',
                    description: "Jeu du pendu crée en début de formation et en utilisant uniquement Javascript dans un but de compréhension des algorythmes intermédiaires.",
                    url: "https://github.com/AxelJarni/Pendu_Game",
                    urlpage: "https://axeljarni.github.io/Pendu_Game/"
                },
                {
                    name: 'Chifoumi',
                    tech: 'Javascript',
                    description: "Chifoumi crée en début de formation et en utilisant uniquement Javascript afin d'initier aux algorythmes simples",
                    url: "https://github.com/AxelJarni/Chifoumi",
                    urlpage: "https://axeljarni.github.io/Chifoumi/"
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
            <section id='projects' className='container my-5'>
                <h3 className='my-3'>Portfolio de mes projets</h3>
                <div className='row'>
                    {projectCards}
                </div>
            </section>
        );
    };
}

export default Projects;