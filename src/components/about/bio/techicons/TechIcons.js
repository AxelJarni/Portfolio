import React from 'react';

class TechIcons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <li className='list-inline-item'>
                <a href={this.props.techs.url}>
                    <img class='techimg' src={this.props.techs.img}/>
                </a>
            </li>
        );
    };
}

export default TechIcons;