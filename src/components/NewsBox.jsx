import {PulseLoader, ClipLoader} from "react-spinners/";
import '../styles/newsBox.css';

const NewsBox = ({newImage, newTitle, cut, big}) => {

    return ( 
        <div className="newsBox">
            {newImage
                ?
                <img 
                    src={newImage}
                    alt="new"
                    className={big ? 'bigBox' : 'littleBox'}
                />
                :
                <ClipLoader
                    color={"#544D4B"} 
                    size={50} 
                />
            }
            {newTitle
                ?
                <h6 className={big ? "newsBox__titleBig" : "newsBox__title"}>{newTitle.substring(0, cut)}</h6>
                :
                <PulseLoader 
                    color={"#544D4B"} 
                    size={6} 
                />
            }
        </div>
    );
}
 
export default NewsBox;