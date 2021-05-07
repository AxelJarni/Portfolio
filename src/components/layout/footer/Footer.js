import Reactlogo from '../../../assets/tech/react.png'

function Footer() {
    return(
        <footer >
            <div className='py-2'>
                <p>Copyright ©2021 Portfolio par Axel JARNIGON.</p>
                <p>Réalisé avec ReactJS <img src={Reactlogo} alt='React logo'/></p>
            </div>
        </footer>
    );
}

export default Footer;