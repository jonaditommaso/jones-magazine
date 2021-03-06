import { connect } from "react-redux";
import {PulseLoader, ClipLoader} from "react-spinners/";
import '../styles/newsBox/newsBox.css';
import { getNews } from '../actions';
import history from "../history";

const NewsBox = ({newImage, newTitle, cut, big, content, getNews, description, id}) => {

    const handleGoToNew = () => {
        getNews(newTitle, newImage, content, description);
        history.push(`/insidenews/${id}`);
    }

    return ( 
        <div className="newsBox" onClick={handleGoToNew}>
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
            {newTitle && <h6 className={big ? "newsBox__titleBig" : "newsBox__title"}>{newTitle}</h6>
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        noticias: state.news
    }
}
 
export default connect(mapStateToProps, {getNews})(NewsBox)