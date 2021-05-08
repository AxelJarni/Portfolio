import React from 'react';

class TechIcons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // Tech icons under the bio. Getting them from array in parent component
        return(
            <li className='list-inline-item'>
                <a href={this.props.techs.url}>
                    <img className='techimg' src={this.props.techs.img} alt='Icone de technologie'/>
                </a>
            </li>
        );
    };
}

export default TechIcons;