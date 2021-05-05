import React from 'react';
import ProjectCard from './projectcard/ProjectCard'

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state= { 
            project:  [
                {
                    name: 'Jeu des paires',
                    tech: 'Javascript, HTML, CSS',
                    description: "Un jeu des paires responsive dans l'univers de Rainbow Six Siege."
                },
                {
                    name: 'Terre de Geek',
                    tech: 'HTML, CSS',
                    description: "Creation d'une base de site vitrine et responsive pour une boutique de vente de produits technologiques."
                },
                {
                    name: 'Bankyy',
                    tech: 'HTML, CSS, Javascript, Ajax',
                    description: "Creation d'une app web simulant une gestion de compte en banque et en utilisant Ajax pour des requetes API"
                },
                {
                    name: 'NorImmo',
                    tech: 'Javascript, HTML, CSS',
                    description: "Projet de groupe, création d'un site vitrine d'agence immobilière intégrant multiples fonctionnalités en Javascript(slideshow, estimation de projet, formulaire de contact,...)."
                },
                {
                    name: 'Jeu du Pendu',
                    tech: 'Javascript',
                    description: "Jeu du pendu en utilisant uniquement Javascript."
                },
                {
                    name: 'Chifoumi',
                    tech: 'Javascript',
                    description: "Chifoumi crée en utilisant uniquement Javascript"
                },
            ]
        }
    }

    render() {

        return(
            <section id='projects' className='container'>
                <h3>Portfolio de mes projets</h3>
                <div className='row'>
                    <ProjectCard />
                </div>
            </section>
        );
    };
}

export default Projects;