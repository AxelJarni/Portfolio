import React from 'react';

class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div class="col-sm-12 col-md-6 col-lg-4 p-3 h-100">
                <div className='card h-100'>
                    <img class="card-img-top" src="..." alt="Card image cap" />
                    <div class="card-body">
                        <h4 class="card-title">{this.props.project.name}</h4>
                        <p class="card-text">{this.props.project.description}</p>
                        <p class="card-text"><em>{this.props.project.tech}</em></p>
                        <a href={this.props.project.url} class="btn btn-primary mx-5">Github</a>
                        <a href={this.props.project.urlpage} class="btn btn-primary mx-5">GH-Page</a>
                    </div>
                </div>
            </div> 
        );
    };
}

export default ProjectCard;