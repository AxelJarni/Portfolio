import MyPicture from "../../../assets/mypic.jpg"

function MyPic () {
    return(
        <div className="col-sm-12 col-md-4">
            <img className="myPic" src={MyPicture} alt='Photo de Axel Jarnigon' />
        </div>
    );
}

export default MyPic;