import SimpleMap from "./simplemap/SimpleMap";

function Contact() {
    return (
        <section id='contact' className="container">
           <h3>Me contacter</h3>
           <div className='row'>
                <div className='col-sm-12 col-lg-6 d-flex flex-column'>
                    <ul className='d-flex flex-column justify-content-center ml-auto'>
                        <li className="contactList">
                            <a href="tel:+33620127580">
                                <i className="fa fa-phone m-3"></i>
                            </a>
                            +33 6 20 12 75 80
                        </li>
                        <li className='contactList'>
                            <a href='mailto:axel.jarnigon@gmail.com'>
                                <i className="fa fa-envelope m-3"></i><span>axel.jarnigon@gmail.com</span>
                            </a>
                            
                        </li>
                    </ul>

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
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <SimpleMap />
                </div>
           </div>
        </section>
    );
}

export default Contact;