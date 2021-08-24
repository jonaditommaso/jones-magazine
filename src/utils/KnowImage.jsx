import '../styles/knowImage.css';

const KnowImage = ({newImage, newTitle, cut}) => {

    // const title = () => {
    //     if(newTitle.substring(0, cut).length > 110) {
    //         const shortTitle = newTitle.substring(0, cut).substring(0, 110) + '...';
    //         return shortTitle
    //     }
    //     else {
    //         return newTitle.substring(0, cut);
    //     }
    // }


    return ( 
        <div className="know__newsContainer">
            <div className="know__newsPhotos">
                <img src={newImage} alt="new1" loading="lazy" />
            </div>
            <figcaption className="know__title">{newTitle.substring(0, cut)}</figcaption>
        </div>
    );
}
 
export default KnowImage;