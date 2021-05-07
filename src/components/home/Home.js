import Typical from 'react-typical'

function Home () {
    return(
        <div id='home'>
            <section className='homeTitle d-flex flex-column align-items-center justify-content-center'>
                <h2>Axel Jarnigon</h2>
                <Typical
                    steps={['Je suis développeur Web', 1500, 'Je suis curieux', 1500, 'Je suis en apprentissage permanent', 1500, 'Je suis disponible', 5000]}
                    loop={Infinity}
                    wrapper="p"
                    className='typical'
                />
            </section>
        </div>
    );
}

export default Home