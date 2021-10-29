import '../styles/knowImage/knowImage.css';
import history from '../history';
import { getNews } from '../actions';
import { connect } from 'react-redux';

const KnowImage = ({newImage, newTitle, content, description, getNews}) => {

    const handleGoToNew = () => {
        getNews(newTitle, newImage, content, description);
        history.push('/insidenews');
    }


    return ( 
        <div className="know__newsContainer" onClick={handleGoToNew}>
            <img src={newImage} alt="new1" loading="lazy" />
            <figcaption className="know__title">{newTitle}</figcaption>
        </div>
    );
}
 
const mapStateToProps = (state) => {
    return {
        noticias: state.news
    }
}
 
export default connect(mapStateToProps, {getNews})(KnowImage);