import Bio from "./bio/Bio";
import MyPic from "./mypic/MyPic";

function About() {
    return (
        <section id='about' className="container offsetanchor">
           <h3>Un peu plus sur <span>moi</span></h3>
           <div className="row">
                <MyPic />
                <Bio />
           </div>
        </section>
    );
}

export default About;