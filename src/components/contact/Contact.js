import InfoContact from "./infocontact/InfoContact";
import SimpleMap from "./simplemap/SimpleMap";
import SocialContact from "./socialcontact/SocialContact";

function Contact() {
    return (
        <section id='contact' className="container">
           <h3>Me contacter</h3>
           <div className='row'>
                <div className='col-sm-12 col-lg-6 d-flex flex-column'>
                    <InfoContact />
                    <SocialContact />
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <SimpleMap />
                </div>
           </div>
        </section>
    );
}

export default Contact;