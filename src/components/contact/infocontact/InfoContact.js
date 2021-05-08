function InfoContact() {
    return(
        <ul className='d-flex flex-column justify-content-center ml-auto'>
            <li className="contactList">
                <a href="tel:+33620127580">
                    <i className="fa fa-phone m-3"></i>
                    <span>+33 6 20 12 75 80</span>
                </a>
                
            </li>
            <li className='contactList'>
                <a href='mailto:axel.jarnigon@gmail.com'>
                    <i className="fa fa-envelope m-3"></i>
                    <span>axel.jarnigon@gmail.com</span>
                </a>
            </li>
        </ul>
    );
}

export default InfoContact;