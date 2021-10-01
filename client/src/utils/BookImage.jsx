import '../styles/bookImage/bookImage.css';
import Snackbar from './Snackbar';

const BookImage = ({src, alt, name, price, rating, author, button, big, forRedux, remove}) => {
    return ( 
        <div className={big ? "bookImage__bigContainer" : "bookImage__container"}>
            <img src={src} alt={alt} loading="lazy" className={big ? "bookImageBig" : "bookImage"} />
            <div className="book__data">
                <p className="book__name">{name}</p>
                <p className="book__author"><i>{author}</i></p>
                <p className="book__price">AR$ {price}</p>
                {/* <p>{rating}</p> */}
                {button 
                ? 
                <Snackbar 
                    name={name}
                    price={price}
                    author={author}
                    src={src}
                    alt={alt}
                    redux={forRedux}
                    remove={remove}
                /> 
                : null
                }
            </div>
        </div>
     );
}
 
export default BookImage;