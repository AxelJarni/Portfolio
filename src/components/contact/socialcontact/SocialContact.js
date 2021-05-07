function SocialContact() {
    return(
        <ul className='d-flex flex-row mx-auto'>
            <li className='list-inline-item socialsicon'>
                <a href="https://www.linkedin.com/in/axel-jarnigon-3494491b5/">
                    <i className="fab fa-linkedin-in m-3"></i>
                </a>
            </li>
            <li className='list-inline-item socialsicon'>
                <a href='https://github.com/AxelJarni'>
                    <i className="fab fa-github m-3"></i>
                </a>
            </li>
            <li className='list-inline-item socialsicon'>
                <a href='https://twitter.com/AxelJarni'>
                    <i className="fab fa-twitter m-3"></i>
                </a>
            </li>
        </ul>
    );
}

export default SocialContact;