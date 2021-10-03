import NewsBox from "./NewsBox";
import { connect } from 'react-redux';
import '../styles/insideNews/insideNews.css'

const InsideTheNews = ({noticia}) => {

    return ( 
        <div>
            <hr />
            <div>
                <h4>{noticia.title}</h4>
                <div className="inside__img">
                    <img src={noticia.src} alt='' width="900"/>
                </div>
                
            </div>
            <div className="inside__description">
                {noticia.description}
            </div>

            <div className="inside__content">
                {noticia.content}
            </div>

            {/* <div>
               <p>MIRA TAMBIÉN</p>
               <div>
                    <NewsBox />
                </div>
                <div>
                    <NewsBox />
                </div>
               
            </div> */}
        </div>
     );
}

const mapStateToProps = (state) => {
    return {
        noticia: state.news.news
    }
}
 
export default connect(mapStateToProps, null)(InsideTheNews)