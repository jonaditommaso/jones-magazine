import '../styles/bookImage.css';
import Snackbar from './Snackbar';

const BookImage = ({src, alt, name, price, rating, author, button, big}) => {
    return ( 
        <div className={big ? "bookImage__bigContainer" : "bookImage__container"}>
            <img src={src} alt={alt} loading="lazy" className={big ? "bookImageBig" : "bookImage"} />
            <div className="book__data">
                <p className="book__name">{name}</p>
                <p className="book__author"><i>{author}</i></p>
                <p className="book__price">{price}</p>
                {/* <p>{rating}</p> */}
                {button ? <Snackbar /> : null}
            </div>
        </div>
     );
}
 
export default BookImage;