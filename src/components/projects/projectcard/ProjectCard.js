import React from 'react';

class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // Returning basic bootstrap card with auto filling from props array
        return(
            <div className="projectcard col-sm-12 col-md-6 col-lg-4 p-3 h-100"> 
                <div className='card h-100'>
                    <img className="card-img-top" src={this.props.project.img} alt="Screenshot du projet" />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.project.name}</h4>
                        <p className="card-text">{this.props.project.description}</p>
                        <p className="card-text"><em>{this.props.project.tech}</em></p>
                        <a href={this.props.project.url} className="btn projectbtn text-white mx-5 my-2">Github</a>
                        <a href={this.props.project.urlpage} className="btn projectbtn text-white mx-5 my-2">GH-Page</a>
                    </div>
                </div>
            </div> 
        );
    };
}

export default ProjectCard;