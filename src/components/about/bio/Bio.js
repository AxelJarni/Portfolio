import React from "react";
import TechIcons from "../bio/techicons/TechIcons";
import HTML5icon from "../../../assets/tech/html.png";
import CSS3icon from "../../../assets/tech/css.png";
import JSicon from "../../../assets/tech/js.png";
import Reacticon from "../../../assets/tech/react.png";
import Bootstrapicon from "../../../assets/tech/bootstrap.png";
import Giticon from "../../../assets/tech/git.png";
import PHPIcon from "../../../assets/tech/PHP-logo.svg.png";
import SymfonyIcon from "../../../assets/tech/symfonylogo.png";
import MySQLIcon from "../../../assets/tech/MySQL.png";
import MongoDBIcon from "../../../assets/tech/MongoDBIcon.jpg";

class Bio extends React.Component {
    constructor(props) {
        super(props);
        // Array for tech icons under bio
        this.state= { 
            techs:  [
                {
                    name: 'HTML5',
                    img: HTML5icon,
                    url: 'https://en.wikipedia.org/wiki/HTML5'
                },
                {
                    name: 'CSS3',
                    img: CSS3icon,
                    url: 'https://www.w3.org/Style/CSS/Overview.en.html'
                },
                {
                    name: 'JavaScript',
                    img: JSicon,
                    url:'https://www.javascript.com/'
                },
                {
                    name: 'React',
                    img: Reacticon,
                    url:'https://reactjs.org/'
                },
                {
                    name: 'Bootstrap',
                    img: Bootstrapicon,
                    url:'https://getbootstrap.com/'
                },
                {
                    name: 'Git',
                    img: Giticon,
                    url:'https://git-scm.com/'
                },
                {
                    name: 'PHP',
                    img: PHPIcon,
                    url:'https://www.php.net/'
                },
                {
                    name: 'Symfony',
                    img: SymfonyIcon,
                    url:'https://symfony.com/'
                },
                {
                    name: 'MySQL',
                    img: MySQLIcon,
                    url:'https://www.mysql.com/'
                },
                {
                    name: 'MongoDB',
                    img: MongoDBIcon,
                    url:'https://www.mongodb.com/'
                }
            ]
        }
    }

    render () {
        // Creating a variable calling for child TechIcons for each object of the array
        let techicons = this.state.techs.map(techs => {
                return (
                    <TechIcons techs={techs} />
                )
                } 
            ) 
        return(
            <div className="col-sm-12 col-md-8 text-left container">
                <p className="aboutP">Bonjour, fraichement diplomé de la formation de Développeur Web et Web Mobile. Passionné depuis le plus jeune âge des nouvelles technologies, je me retrouve enfin dans mon domaine de prédilection.</p>
                <p className="aboutP">Je suis quelqu'un de rigoureux, fortement motivé, qui s'adapte facilement à n'importe quel environnement et dont ma curiosité me pousse à apprendre chaque jour de nouvelles choses et techniques.</p>
                <p className="aboutP">De part ma formation précédente en psychologie, j'ai acquis des capacités d'écoute et d'empathie importantes, mes expériences sportives font également de moi quelqu'un de coopératif qui sait communiquer et travailler en équipe.</p>
                <ul className='list-inline'>
                    {techicons}
                </ul>
            </div>
        );
    }
}
export default Bio;